import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 45px;

    h3{
        font-weight: 600;
        font-size: 20px;
        color: var(--color-grey-1);
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img-announcement{
        background: var(--color-grey-10);
        margin: 45px 12px 17px 12px;
        padding: 35px 32px 67px 24px;
        border-radius: 4px;
        height: 355px;

        img{
            object-fit: contain;
            width: 294px;
            height: 253px;
        }
    }

    .purchase-info{
        margin: 0px 12px 24px 12px;
        padding: 44px 28px 28px 28px;
        background: var(--color-grey-10);
        border-radius: 4px;
        height: 327px;

        h3{
            height: 32px;
            margin-bottom: 71px;
        }

        .btn-buy{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 38px;
            background-color: var(--color-brand-1);
            color: var(--color-white-fixed);
            border: 1.5px solid var(--color-brand-1);
            border-radius: 4px;
        }

        .other-infos{
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;

            span:last-child{
                color: var(--color-grey-1);
                font-weight: 500;
                font-size: 16px;
            }

            .car-info{
                display: flex;
                width: 114px;
                margin-bottom: 32px;
                span{
                    width: 51px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:  var(--color-brand-4);
                    color: var(--color-brand-1);
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 4px;
                }

                span:first-child{
                    margin-right: 12px;
                }
            }
        }
    
    }

    .description-announcement{
        background: var(--color-grey-10);
        border-radius: 4px;
        height: 325px;
        margin: 0px 12px 15px 12px;
        padding: 36px 28px;

        h3{
            margin-bottom: 32px;
        }
        p{
            max-height: 200px;
            overflow-y: auto;
            font-weight: 400;
            font-size: 16px;
            color: var(--color-grey-2);
        }
    }

    .photos-announcement{
        margin: 0px 12px 52px 12px;
        padding: 36px 26px 36px 36px;
        background: var(--color-grey-10);
        border-radius: 4px;
        /* height: 360px; */

        .photos{
            margin-top: 32px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            .photo{
                border-radius: 4px;
                padding: 18px 0;
                width: 90px;
                height: 90px;
                background-color: var(--color-grey-7);
                margin-right: 5px;
                margin-bottom: 50px;
                img{
                    object-fit: contain;
                    height: 55px;
                    width: 100%;
                }
            }
        }
    }

    .advertiser-info{
        background: var(--color-grey-10);
        border-radius: 4px;
        margin: 0 12px 18px 12px;
        padding: 40px 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .initial-caracters {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white-fixed);
          height: 77px;
          width: 77px;
          border-radius: 100%;
          background-color: var(--color-brand-2);
          font-weight: 500;
          font-size: 26px;
          margin-bottom: 28px;
        }
        h3{
            margin-bottom: 28px;   
        }
        .advertiser-description{
            margin-bottom: 28px;
        }
        .btn-list-advertiser-announcements{
            height: 48px;
            width: 206px;
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                background-color: var(--color-grey-0);
                color: var(--color-white-fixed);
                border-radius: 4px;
                font-weight: 600;
                font-size: 16px;
                line-height: 0px;
            }
        }

    }

    .fixed{
        position: absolute;
        z-index: -10;
        background-color: var(--color-brand-1);
        width: 100%;
        height: 32.25rem;
    }

    @media (min-width: 768px) {
        .img-announcement{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .purchase-info{
            width: 90%;
        }
        .description-announcement{
            width: 90%;
        }
        .photos-announcement{
            width: 90%;
        }
        .advertiser-info{
            width: 90%;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 73px;
        
        section:first-child{
            width: 70%;

            .img-announcement{
                height: 355px;
                margin: 40px 46px 16px 0px;
            }

            .purchase-info{

                height: 240px;
                padding: 44px 49px 28px 44px;
                margin: 0px 46px 40px 0px;

                h3{
                    margin-bottom: 41px;
                }
                .other-infos{
                    height: 32px;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }

            .description-announcement{
                height: 250px;
                padding: 36px 44px;
                margin: 0px 46px 16px 0px;
            }
        }
        section{
            width: 30%;
            .photos-announcement{
                margin: 40px 0 44px 0;
                .photos{
                    .photo{
                        margin-right: 14px;
                        margin-bottom: 32px;
                    }
                } 
            }
            .advertiser-info{
                padding: 37px 44px;
                height: 426px;

                .initial-caracters{
                    height: 104px;
                    width: 104px;
                }
                .advertiser-description{
                    height: 84px;
                    overflow-y: auto;
                }
                .btn-list-advertiser-announcements{
                    button{
                        padding: 0;
                    }
                }
            }
        }
    }

    @media (min-width: 1440px) {
         padding: 0 181px;

         section:first-child{
            width: 752px;

            .img-announcement{
                width: 100%;
                height: 355px;
            }

            .purchase-info{
                width: 100%;
                height: 240px;
            }

            .description-announcement{
                width: 100%;
            }
         }

         section{
            width: 440px;
            .photos-announcement{
                width: 100%;
                height: 377px;
            }
            .advertiser-info{
                width: 100%;
                height: 426px;
            }

        }
    }
`