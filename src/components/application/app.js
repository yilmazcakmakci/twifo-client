import React, { Component } from 'react'
import Profile from './profile'
import Card from '../layout/card'
import Footer from '../layout/footer'
import { Tooltip, Modal } from 'antd'
import { checkIfUserDataExist, requestToLambda, saveDataToDatabase, checkSession, signInWithTwitter, updateDatabase } from '../../utils/functions'
import download from 'downloadjs'
import CustomButton from '../layout/custom-button'
import dayjs from 'dayjs'
import Lottie from 'react-lottie'
import * as Loading from '../../assets/loading.json'
import * as htmlToImage from 'html-to-image'
import { AlertOctagon } from 'react-feather' 
import dummyParams from '../../utils/dummyData'
import { AppContext } from '../../context'
import TweetCountError from './tweetCountError'
import Helmet from 'react-helmet'


const LoadingOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading.default,
    }

export class Application extends Component {

    static contextType = AppContext

    state = {
        data : null,
        tweetCount : null,
        tweetCountError : false,
        isClicked : false,
        visible: true
    }

    
    componentDidMount() {
        
        if(checkSession()) {
            const {screen_name,user_id,oauth_token,oauth_token_secret} = JSON.parse(sessionStorage.getItem('Session'))
            const params = {
                "params" : {
                    screen_name,
                    oauth_token,
                    oauth_token_secret
                }
            }

            checkIfUserDataExist(user_id).then((doc)=> {
                if (doc === false) {
                    requestToLambda(params).then( res => {
                        if (res.data.hasOwnProperty('errorName')) {
                            this.setState({tweetCountError:true})
                        }
                        else {

                            this.setState({
                                data : res.data.infos,
                                tweetCount : res.data.tweetCount
                            })

                            if(process.env.NODE_ENV === 'production') {
                                const newData = {data:res.data,createdAt:Date()}
                                saveDataToDatabase(newData,user_id).catch( err => console.log(err))
                            }

                        }
                    }).catch( err => console.log(err))
                }
                else {
                    this.setState({
                        data:doc.data.infos,
                        createdAt : doc.createdAt,
                        tweetCount : doc.data.tweetCount
                    })
                }
            }).catch( err => console.log(err))
            
        }
    }
    
    update = () => {
        if(!checkSession()) {
            signInWithTwitter()
        }

        else {
            
            const {screen_name,user_id,oauth_token,oauth_token_secret} = JSON.parse(sessionStorage.getItem('Session'))
            const params = {
                "params" : {
                    screen_name,
                    oauth_token,
                    oauth_token_secret
                }
            }

            this.setState({ data:null,isClicked:true,tweetCountError:false })
            
            requestToLambda(params).then( res => {
                if (res.data.hasOwnProperty('errorName')) {
                    this.setState({tweetCountError:true})
                }
                else {

                    this.setState({
                        data : res.data.infos,
                        tweetCount : res.data.tweetCount
                    })

                    const newData = {data:res.data,createdAt:Date()}
                    updateDatabase(newData,user_id).then( _ =>{
                        checkIfUserDataExist(user_id).then( doc => {
                            this.setState({createdAt:doc.createdAt})                            
                        })
                    })
                }
            }).catch(err => console.log(err))
        }
    }

    share = () => {
        const node = document.getElementById('ss');

        htmlToImage.toJpeg(node,{ backgroundColor:'white',style: {paddingLeft:'15px',paddingRight:'15px'} }).then(dataUrl => {
            download(dataUrl, 'twifo.jpeg')
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }

    render() {
        const { texts } = this.context
        const { data, createdAt, isClicked, tweetCount, tweetCountError} = this.state
        
        if(!checkSession()) {
            return Modal.error({
                title:texts.modal.msg,
                visible:true,
                okButtonProps:{style:{display:'none'}},
                content: (
                    <div className='flex justify-center mt-4'>
                        <CustomButton text={texts.modal.sign} size={24} func={signInWithTwitter} type='primary' extraClassName='py-2' icon='twitter' />
                        <a href='/'>
                            <CustomButton text={texts.modal.home} size={24} type='outline' extraClassName='py-2 ml-2' icon='home' />
                        </a>
                    </div>),
                icon:<AlertOctagon className='mb-4' size={32} color='#80398d'  />,
                keyboard:false
            }).destroy

        }
        else {
            return (
                <div>
                    <Helmet>
                        <title>App · Twifo</title>
                        <meta name='description' content='Twifo, Twitter hesabınızı analiz ederek çeşitli eğlenceli istatistikler sunan bir web uygulamasıdır.' />    
                    </Helmet> 
                    <div className='flex pt-32 relative flex-col-reverse lg:flex-row px-8 sm:px-16 max-w-screen-xl mx-auto min-h-screen'>
                        <div className='w-full lg:w-4/5'>
                            {
                                !tweetCountError && (
                                    <div className='flex justify-between items-center mb-8' style={{flexFlow:'wrap'}}>
                                        <Tooltip title={dayjs(createdAt).fromNow() || 'Loading'} overlayClassName='text-xs'>
                                            <div>
                                                <CustomButton size={16} text={texts.buttons.update} func={() => {
                                                    this.setState({isClicked : true})
                                                    this.update()
                                                }} isUpdating={isClicked && (data === null && !tweetCountError)} rounded extraClassName='py-1' icon='update' />
                                            </div>
                                        </Tooltip>
                                        <div className='font-baloo mt-4 md:m-0 basis-full md:basis-auto'>
                                            {tweetCount && <span>Attığınız son <b className='text-lg'>{tweetCount}</b> tweetten analiz edilmiştir.</span>}
                                        </div>
                                    </div>
                                )
                            }
                            <div className={'flex '+ (tweetCountError ? 'justify-center items-center':'justify-between')} style={{flexFlow:'wrap'}} id='ss'>
                                {
                                    tweetCountError ? <TweetCountError func={this.update} /> : data === null ? (
                                        <Lottie isClickToPauseDisabled={true} options={LoadingOptions} width={128} height={128} />
                                    ) : data.map( (card, index) => <Card data={card} key={index} />)
                                }
                            </div>
                            <div id='share-photo'></div>
                        </div>
                        <div className='w-full mb-8 lg:w-1/5 lg:ml-16'>
                            <Profile screenShot={this.share} show={tweetCountError} />
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Application