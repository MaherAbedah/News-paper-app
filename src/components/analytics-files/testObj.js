


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
    { "time": 20, "amount": 11},
    { "time": 30, "amount": 41},
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
};

export default TestObj