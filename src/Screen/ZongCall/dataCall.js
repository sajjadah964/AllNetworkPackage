// import imagePath from "./imagePath";
import imagePath from '../../constants/imagePath';
let dataCall = [
    {
        id: 0,
        pkgName: 'Super Student Offer',
        validity: '2 Hour',
        price:10,
        activationCode: '*5555#',
        description: 'You can Subscribe this offer through my APP',
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: 'Unlimited Mins',
            sms:null,
            internet:1000,
        }
    },
    {
        id: 1,
        pkgName: 'Daily Voice Bundle',
        validity: '1 Day',
        price: 5,
        activationCode: '*45#',
        description: 'Zong laya ap kay liy ak best Offer that you will connected  with your love at ant time ',
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: 20,
            sms: null,
            internet: null,
        }
    },
    {
        id: 2,
        pkgName: 'Full day offer',
        validity: '1 Day',
        price: 6,
        activationCode: '*118*1#',
        description: `You can Unsubscribe this offer SMS 'Unsub' to 1181. Internet are useable only for the Whatsapp.This offer will be auto-recursive `,
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: 75,
            sms:100,
            internet:30,
        }
    },
    {
        id: 3,
        pkgName: 'Best one day Offer',
        validity: '1 Day',
        price: 9,
        activationCode: '*666#',
        description: `This offer will be available between 6AM to 6PM.You can Unsubscribe this offer SMS :'Unsub' to 666111 `,
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:null,
            onnetMint: 'Unlimited Mins',
            sms: 500,
            internet: null,
        }
    },
    {
        id: 4,
        pkgName: 'Supreme Plus Bundle',
        validity: '1 Month',
        price: 1732,
        activationCode: '*1500#',
        description: 'In this Offer you can enjoy 10000 MB Internet and 4GB Whatsapp for one month.',
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:600,
            onnetMint: 10000,
            sms: 10000,
            internet: 10000,
        }
    },
    {
        id: 5,
        pkgName: 'Monthly Best Offer',
        validity: '1 Month',
        price: 1299,
        activationCode: '*4567#',
        description: 'You can enjoy 20GB internet +6GB Youtube and 4GB Whatsapp for one month.',
        statusCode: null,
        url: imagePath.icZonglogo,
        pkgDetails: {
            offnetMint:450,
            onnetMint:5000,
            sms:5000,
            internet:30000,
        }
    },
    {
        id: 6,
        pkgName: 'Voice Super Bundle',
        validity: '1 Month',
        price:1200,
        activationCode: '310',
        url: imagePath.icZonglogo,
        description: 'Offer available for all consumer.Just dial 310 and select from the Main Menu and follow the instruction to subscribe this offer.',
        statusCode: null,
        pkgDetails: {
            offnetMint: 900,
            onnetMint:null,
            sms:1000,
            internet:null,
        }
    },
    {
        id: 7,
        pkgName: 'Monthly 899 Offer',
        validity: '1 Month',
        price:899,
        activationCode: '*3030#',
        url: imagePath.icZonglogo,
        description: 'In this offer you get 20GB internet also include 2GB youtube and Whatsapp Free.',
        statusCode: null,
        pkgDetails: {
            offnetMint:300,
            onnetMint: 5000,
            sms:5000,
            internet:20000,
        }
    },
    {
        id: 8,
        pkgName: 'Super Card Monthly',
        validity: '1 Month',
        price: 699,
        activationCode: '6464',
        url: imagePath.icZonglogo,
        description: 'You can get 3GB internet and 3GB whatsapp.If you want to un-subscribe any of the bundle just dial *6464#, reply with 4 for all-in-one bundles, ',
        statusCode: null,
        pkgDetails: {
            offnetMint: 250,
            onnetMint:'Unlimited Mins',
            sms:'Unlimited Mins',
            internet:10000,
        }
    },
    {
        id: 9,
        pkgName: 'Voice Monthly Super Offer',
        validity: '1 Month',
        price:600,
        activationCode: '310',
        url: imagePath.icZonglogo,
        description: 'Simply you dial 310 and select 5 from the Main-Menu and follow the instruction to subscribe this super offer',
        statusCode: null,
        pkgDetails: {
            offnetMint:425,
            onnetMint:null,
            sms:500,
            internet:null,
        }
    },
    {
        id: 10,
        pkgName: 'Super Monthly Bundle',
        validity: '1 Month',
        price: 305,
        activationCode: '*1000#',
        url: imagePath.icZonglogo,
        description: `If you un-subscribe this offer simply send 'unsub Mahana'to 7091 `,
        statusCode: null,
        pkgDetails: {
            offnetMint:100,
            onnetMint:1000,
            sms: 1000,
            internet:1000,
        }
    },
    {
        id: 11,
        pkgName: 'Unlimited Mahana Offer',
        validity: '1 Month',
        price: 255,
        activationCode: '522',
        url: imagePath.icZonglogo,
        description: 'Zong Unlimited Offer are the auto-renewable to deactivate this offer.Simply SMS unsub to 522.To Subscribe this offer:send (PK30) to 522 without bracket.You can also get 500 SMS/ day ',
        statusCode: null,
        pkgDetails: {
            offnetMint: null,
            onnetMint:'unlimited Mins',
            sms: 500,
            internet:null,
        }
    },
    {
        id: 12,
        pkgName: 'Whatsapp Super Offer',
        validity: '1 Month',
        price: 140,
        activationCode: '*4000#',
        url: imagePath.icZonglogo,
        description: 'You can get 5GB  data only for the Whatsapp/IMO. ',
        statusCode: null,
        pkgDetails: {
            offnetMint: 25,
            onnetMint:200,
            sms: null,
            internet:5000,
        }
    },
    {
        id: 13,
        pkgName: ' Combo Pack 15Day',
        validity: '15 Day',
        price:200,
        activationCode: '*15#',
        url: imagePath.icZonglogo,
        description: 'You can 3GB Data and 50 All-Network Mins for the 15 days.  ',
        statusCode: null,
        pkgDetails: {
            offnetMint: 50,
            onnetMint:null,
            sms:null,
            internet:3000,
        }
    },
    {
        id: 14,
        pkgName: '80 min Voice Bundle',
        validity: '15 Day',
        price: 120,
        activationCode: '310',
        url: imagePath.icZonglogo,
        description: 'Simply dial 310 and select 5 from the Mian-Menu  and follow the instruction to subscribe this offer. ',
        statusCode: null,
        pkgDetails: {
            offnetMint: 80,
            onnetMint:null,
            sms:100,
            internet:null,
        }
    },
    {
        id: 15,
        pkgName: 'Weekly premium Offer',
        validity: '7 Day',
        price: 365,
        activationCode: '*225#',
        url: imagePath.icZonglogo,
        description: 'In this Offer you can 30GB data and unlimited On-net and Off-net mins and SMS for a Week. .  ',
        statusCode: '*102#',
        pkgDetails: {
            offnetMint: 180,
            onnetMint:'Unlimited-Mins',
            sms:'Unlimited-Mins',
            internet:30000,
        }
    },
    {
        id: 16,
        pkgName: 'Haftawar Super Offer',
        validity: '7 Day',
        price: 300,
        activationCode: '*70#',
        url: imagePath.icZonglogo,
        description: 'To un-subscribe this offer,simply dial *6464# reply with 4,',
        statusCode: null,
        pkgDetails: {
            offnetMint: 100,
            onnetMint:'Unlimited-Mins',
            sms:'Unlimited-Mins',
            internet:12000,
        }
    },
    {
        id: 17,
        pkgName: 'Super Monthly Offer',
        validity: '1 Month',
        price: 170,
        activationCode: '4952',
        url: imagePath.icZonglogo,
        description: 'Just dial 310 and select 4 from the main-menu and fellow the instruction to activate this bundle. ',
        statusCode: null,
        pkgDetails: {
            offnetMint:null,
            onnetMint:100,
            sms: 100,
            internet:1,
        }
    },
    {
        id: 18,
        pkgName: 'Shandar Weekly Ofer',
        validity: '7 day',
        price: 120,
        activationCode: '*7#',
        url: imagePath.icZonglogo,
        description: 'In this offer you get 500 SMS 500 MB internet and Mins. ',
        statusCode: null,
        pkgDetails: {
            offnetMint: 40,
            onnetMint:500,
            sms: 500,
            internet:500,
        }
    },
    {
        id: 18,
        pkgName: 'Weekly Unlimited Bundle',
        validity: '7 Day',
        price: 63,
        activationCode: '522',
        url: imagePath.icZonglogo,
        description: `This offer will be auto-renewable to deactivate this offer,simply SMS 'unsub' to 522. `,
        statusCode: null,
        pkgDetails: {
            offnetMint:null,
            onnetMint:'Unlimited Mins',
            sms:150,
            internet:null,
        }
    },
    {
        id: 19,
        pkgName: 'Daily Unlimited Call Off..',
        validity: '1 Day',
        price: 12,
        activationCode: '*522#',
        url: imagePath.icZonglogo,
        description: `This offer will be auto-renewable to deactivate this offer,simply SMS 'unsub' to 522. `,
        statusCode: null,
        pkgDetails: {
            offnetMint:null,
            onnetMint:'Unlimited Mins',
            sms:null,
            internet:1,
        }
    },
    {
        id: 20,
        pkgName: 'Daily Shandar Offer ',
        validity: '1 Day',
        price: 17,
        activationCode: '*522#',
        url: imagePath.icZonglogo,
        description: `You can get hands on the unlimited-Mins and 800 SMS and 50 MB internet.  `,
        statusCode: null,
        pkgDetails: {
            offnetMint:null,
            onnetMint:'Unlimited Mins',
            sms:800,
            internet:50,
        }
    },
]
export default dataCall ;