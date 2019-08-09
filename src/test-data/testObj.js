import myImage from '../images/profile-placeholder.png'; 


 const TestObj = {
  "name": "Hesari",
  "percent_of_total_revenue": 0.5,
  "payment_percent": {
    "monthly": 0.6,
    "package": 0.3,
    "single": 0.1
  },
	"top_articles": [
	    {
	      "title": "article_name_1",
	      "link": "https://www.savonsanomat.fi/ulkomaat/Yli-400-mielenosoittajaa-pid%C3%A4tetty-Moskovassa-%E2%80%93-Oletteko-unohtaneet-perustuslain/1389553",
	      "total_reads" : 270,
	      "monthly_percent":50,
	      "package_percent":30,
	      "single_percent":20
	    },
	    {
	      "title": "article_name_2",
	      "link":  "url",
	      "total_reads" : 210,
	      "monthly_percent":60,
	      "package_percent":30,
	      "single_percent":10
	    },
	    {
	      "title": "article_name_3",
	      "link":  "url",
	      "total_reads" : 150,
	      "monthly_percent":30,
	      "package_percent":40,
	      "single_percent":30
	    },
	    {
	      "title": "article_name_4",
	      "link":  "url",
	      "total_reads" : 80,
	      "monthly_percent":10,
	      "package_percent":90,
	      "single_percent":0
	    }
	 ],
	 "categories": [
    { "category":  "politics", "reads":  31 },
    { "category":  "sports", "reads":  32 },
    { "category":  "health", "reads":  33 }
  ],
    "devices": [
    { "name": "PC", "amount": 201 },
    { "name": "Mobile", "amount": 12 },
    { "name": "Tablet", "amount": 1 },
    { "name": "unknown", "amount":  11000 }
  ],
  "os": [
    { "name": "Android", "amount": 201 },
    { "name": "Windows", "amount": 12 },
    { "name": "Mac", "amount": 1 },
    { "name": "unknown", "amount":  11000 }
  ],
  "location": [
    { "name": "jyväskylä", "amount": 201 },
    { "name": "helsinki", "amount": 12 },
    { "name": "oulu", "amount": 1 },
    { "name": "unknown", "amount":  11000 }
  ],
  "browser": [
    { "name": "Edge", "amount": 201 },
    { "name": "Chrome", "amount": 12 },
    { "name": "Firefox", "amount": 1 },
    { "name": "unknown", "amount":  11000 }
  ],
 
  "unique_active_users_this_month": 10,
  "new_users": 6,
  "returning_users": 5,
  "anonymous_users": 1,
  "average_duration": 33,
  "min_duration": 1,
  "max_duration": 60,
  "duration_chart": [
    { "time": 1, "amount": 2},
    { "time": 10, "amount": 21},
    { "time": 20, "amount": 60},
    { "time": 30, "amount": 41},
    { "time": 40, "amount": 10},
    { "time": 50, "amount": 15},
    { "time": 60, "amount": 1},
  ],
  "max_traffic": 19,
  "min_traffic": 15,
  "traffic_chart": [
    { "time": 8, "amount": 20},
    { "time": 12, "amount": 12},
    { "time": 15, "amount": 4},
    { "time": 19, "amount": 40},
    { "time": 22, "amount": 6}
  ],
  "user": {
  name:'maher',
  last_name:'abedah',
  email: 'maher@example.com',
  subscription_end: '18.08.2019',
  image:myImage,
  package_end:0,
  tokens:3,
  latestArticles:[
    {
      title: 'STOCK EXCHANGE: Wall Street opened its bill on Wednesday',
      link: 'https://www.kauppalehti.fi/uutiset/porssit-wall-street-avasi-laskuun-keskiviikkona/1932d477-26d9-4585-ac79-e4cfb6aed90a',
      accessed: '06.05.2019'
    },
    {
      title: 'Kasil Classes Sent Satellite to the Stratosphere - Steam Summer School Trained Future Science Experts',
      link: 'https://www.ts.fi/uutiset/paikalliset/4607509/Kasiluokkalaiset+lahettivat+satelliitin+stratosfaariin++Steamkesakoulussa+koulittiin+tulevaisuuden+tiedeosaajia',
      accessed: '08.05.2019'
    },
    {
      title: 'EK tyrmää kaavaillun perhevapaauudistuksen: "Emme ymmärrä, miksi työkykyisiä ihmisiä kannustetaan olemaan poissa töistä"',
      link: 'https://www.ksml.fi/kotimaa/EK-tyrm%C3%A4%C3%A4-kaavaillun-perhevapaauudistuksen-Emme-ymm%C3%A4rr%C3%A4-miksi-ty%C3%B6kykyisi%C3%A4-ihmisi%C3%A4-kannustetaan-olemaan-poissa-t%C3%B6ist%C3%A4/1389516',
      accessed: '13.04.2019'
    },
    {
      title: 'Saksa murskasi Viron peräti 8–0 EM-karsinnoissa, Islanti kaatoi Turkin',
      link: 'https://www.hs.fi/urheilu/art-2000006139642.html',
      accessed: '25.11.2018'
    },
    {
      title: 'Yli 400 mielenosoittajaa pidätetty Moskovassa – "Oletteko unohtaneet perustuslain?"',
      link: 'https://www.savonsanomat.fi/ulkomaat/Yli-400-mielenosoittajaa-pid%C3%A4tetty-Moskovassa-%E2%80%93-Oletteko-unohtaneet-perustuslain/1389553',
      accessed: '17.06.2019'    
    },
    
  ],
  favoriteArticles:[
    {
      title: 'Minister of Labor Timo Harakka corrects misconception about government program: Labor market organizations are not responsible for the creation of 30,000 jobs',
      link: 'https://www.kauppalehti.fi/uutiset/tyoministeri-timo-harakka-korjaa-vaaraa-kasitysta-hallitusohjelmasta-tyomarkkinajarjestot-eivat-olekaan-vetovastuussa-30-000-tyopaikan-luomistalkoissa/d5a0fa9c-9c51-477b-a3b4-ec0b95890cb2',
    },
    {
      title: 'Hulavanteisiin hurahtaneet tyhjensivät kauppojen hyllyt – "Buumi alkoi heti maanantaina"',
      link: 'https://www.ksml.fi/kotimaa/Hulavanne-on-t%C3%A4m%C3%A4n-kes%C3%A4n-piikkimatto-%E2%80%93-professori-py%C3%B6ritt%C3%A4%C3%A4-lantiota-P%C3%A4ij%C3%A4nteen-rannalla/1389510',
    },
  ],

}
};

export default TestObj