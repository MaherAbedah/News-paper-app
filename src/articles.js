import image1 from './images/most-read/image_one.jpg';
import image2 from './images/most-read/image_two.jpg';
import image3 from './images/most-read/image_three.jpg';
import image4 from './images/most-read/image_four.jpg';
import image5 from './images/most-read/image_five.jpg';
import image6 from './images/trending/image_one.jpg';
import image7 from './images/trending/image_two.jpg';
import image8 from './images/trending/image_three.jpg';
import image9 from './images/trending/image_four.jpg';
import image10 from './images/trending/image_five.jpg';
import image11 from './images/last/image_one.jpg';
import image12 from './images/last/image_two.jpg';
import image13 from './images/last/image_three.jpg';
import image14 from './images/last/image_four.jpg';
import image15 from './images/last/image_five.jpg';

 
  const Articles = [
    {name:'politics',
    content:[
      {
        img: image1,
        title: 'Honk Kong protests',
        author: 'BBC',
        link: 'https://www.bbc.com/news/live/world-asia-china-48455370',
        date:'16.08.2018',
        preview:'article preview',
        fav: false,
        read:false,
      },
      {
        img: image2,
        title: 'US hammering Thailand in the women world cup',
        author: 'BBC',
        link: 'https://www.bbc.com/sport/football/48601917',
        date:'16.08.2018',
        preview:'article preview',
        fav: false,
        read:true,
      },
      {
        img: image3,
        title: 'parental leave for both parents to be 5-6 months in Finland',
        author: 'HS',
        link: 'https://www.hs.fi/politiikka/art-2000006139593.html',
        date:'16.08.2018',
        preview:'article preview',
        fav: false,
        read:false,
      },
      {
        img: image4,
        title: 'Turku wants to secure the future of Kariinodi',
        author: 'TS',
        link: 'https://www.ts.fi/uutiset/paikalliset/4607966/Turku+haluaa+turvata+Karinakodin+jatkon++Kaskenlinnan+saattohoitopaikkojen+ei+uskota+riittavan+tulevaisuudessa',
        date:'16.08.2018',
        preview:'article preview',
        fav: false,
        read:true,
      },
      {
        img: image5,
        title: 'Metsä Fibre ja jyväskyläläinen Fimpec tekivät sopimuksen Kemin biotuotetehtaan rakennuttamisesta',
        author: 'KSML',
        link: 'https://www.ksml.fi/talous/Mets%C3%A4-Fibre-ja-jyv%C3%A4skyl%C3%A4l%C3%A4inen-Fimpec-tekiv%C3%A4t-sopimuksen-Kemin-biotuotetehtaan-rakennuttamisesta/1389449',
        date:'16.08.2018',
        preview:'article preview',
        fav: false,
        read:false,
      },
    ]},
    {
      name:'sports',
      content:[
        {
          img: image6,
          title: 'STOCK EXCHANGE: Wall Street opened its bill on Wednesday',
          author: 'KL',
          link: 'https://www.kauppalehti.fi/uutiset/porssit-wall-street-avasi-laskuun-keskiviikkona/1932d477-26d9-4585-ac79-e4cfb6aed90a',
          fav: false,
        },
        {
          img: image7,
          title: 'Kasil Classes Sent Satellite to the Stratosphere - Steam Summer School Trained Future Science Experts',
          author: 'TS',
          link: 'https://www.ts.fi/uutiset/paikalliset/4607509/Kasiluokkalaiset+lahettivat+satelliitin+stratosfaariin++Steamkesakoulussa+koulittiin+tulevaisuuden+tiedeosaajia',
          fav: false,
        },
        {
          img: image8,
          title: 'EK tyrmää kaavaillun perhevapaauudistuksen: "Emme ymmärrä, miksi työkykyisiä ihmisiä kannustetaan olemaan poissa töistä"',
          author: 'KSML',
          link: 'https://www.ksml.fi/kotimaa/EK-tyrm%C3%A4%C3%A4-kaavaillun-perhevapaauudistuksen-Emme-ymm%C3%A4rr%C3%A4-miksi-ty%C3%B6kykyisi%C3%A4-ihmisi%C3%A4-kannustetaan-olemaan-poissa-t%C3%B6ist%C3%A4/1389516',
          fav: false,
        },
        {
          img: image9,
          title: 'Saksa murskasi Viron peräti 8–0 EM-karsinnoissa, Islanti kaatoi Turkin',
          author: 'HS',
          link: 'https://www.hs.fi/urheilu/art-2000006139642.html',
          fav: false,
        },
        {
          img: image10,
          title: 'Yli 400 mielenosoittajaa pidätetty Moskovassa – "Oletteko unohtaneet perustuslain?"',
          author: 'SavonSanomat',
          link: 'https://www.savonsanomat.fi/ulkomaat/Yli-400-mielenosoittajaa-pid%C3%A4tetty-Moskovassa-%E2%80%93-Oletteko-unohtaneet-perustuslain/1389553',
          fav: false,
        },
      ]
    },
    {
      name:'economy',
      content:[
        {
          img: image11,
          title: 'Kommentti: Glen Kamarassa on ainesta suuremmillekin areenoille',
          author: 'Savon Sanomat',
          link: 'https://www.savonsanomat.fi/urheilu/jalkapallo/Kommentti-Glen-Kamarassa-on-ainesta-suuremmillekin-areenoille/1389396',
          fav: false,
        },
        {
          img: image12,
          title: 'Kittilälle osavoitto ministeriöstä hallinto-oikeudessa: Ministeriöllä ei perusteita hyllyttää kymmentä kunta­päättäjää',
          author: 'HS',
          link: 'https://www.hs.fi/kotimaa/art-2000006140205.html',
          fav: false,
        },
        {
          img: image13,
          title: 'Hulavanteisiin hurahtaneet tyhjensivät kauppojen hyllyt – "Buumi alkoi heti maanantaina"',
          author: 'KSML',
          link: 'https://www.ksml.fi/kotimaa/Hulavanne-on-t%C3%A4m%C3%A4n-kes%C3%A4n-piikkimatto-%E2%80%93-professori-py%C3%B6ritt%C3%A4%C3%A4-lantiota-P%C3%A4ij%C3%A4nteen-rannalla/1389510',
          fav: false,
        },
        {
          img: image14,
          title: 'Cruise ships have a reputation as a polluter and it is in the interests of Finns - "In Asia, we are treated with respect"',
          author: 'TS',
          link: 'https://www.ts.fi/uutiset/talous/4607977/Risteilylaivoilla+on+saastuttajan+maine+ja+se+on+suomalaisten+etu++Aasiassa+meita+katsotaan+kunnioituksella',
          fav: false,
        },
        {
          img: image15,
          title: 'Minister of Labor Timo Harakka corrects misconception about government program: Labor market organizations are not responsible for the creation of 30,000 jobs',
          author: 'KL',
          link: 'https://www.kauppalehti.fi/uutiset/tyoministeri-timo-harakka-korjaa-vaaraa-kasitysta-hallitusohjelmasta-tyomarkkinajarjestot-eivat-olekaan-vetovastuussa-30-000-tyopaikan-luomistalkoissa/d5a0fa9c-9c51-477b-a3b4-ec0b95890cb2',
          fav: false,
        },
      ]
    }
  ];

  export default Articles