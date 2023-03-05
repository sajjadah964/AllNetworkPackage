import imagePath from '../../constants/imagePath';
let dataMsg = [
    {
        id: 0,
        pkgName: 'Daily SMS Bundle',
        validity: '1 day',
        price:5,
        activationCode: '*704#',
        description: 'You can Subscribe this offer through my APP.',
        statusCode: '*102#',
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: null,
            sms:500,
            internet:1,
        }
    },
    {
        id: 1,
        pkgName: 'SMS + WhatApp Offer',
        validity: '1 Day',
        price: 7,
        activationCode: '*700#',
        description: `Simply dial *700# and reply with 1 MBs are only useable for the Whatsapp.Also  get 100 MMS/day.Unsubscribe this offer just dial 'unsub' to 700.`,
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: null,
            sms: 500,
            internet: 30,
        }
    },
    {
        id: 2,
        pkgName: 'Haftawar SMS,Whatsapp Bundle',
        validity: '7 Day',
        price: 32,
        activationCode: '*702#',
        description: `You can Unsubscribe this offer SMS 'Unsub' to 1181. Internet are useable only for the Whatsapp.This offer will be auto-recursive `,
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint:null,
            sms:1300,
            internet:200,
        }
    },
    {
        id: 3,
        pkgName: '15 days SMS Bundle',
        validity: '15 Day',
        price: 149,
        activationCode: '701',
        description: `Unlimited Message and Zong to Zong Call Mins.You can Unsubscribe this offer SMS:'Unsub' to 701 `,
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: 'Unlimited Mins',
            sms:'Unlimited-SMS',
            internet: null,
        }
    },
    {
        id: 4,
        pkgName: 'Monthly SMS,Whatsapp Bundle',
        validity: '1 Month',
        price: 75,
        activationCode: '*705#',
        description: 'Internet are use only for the Whatsapp 500 SMS/day for the 30 days.',
        statusCode:'*102#',
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: null,
            sms: 15000,
            internet: 1500,
        }
    },
]
export default dataMsg ;