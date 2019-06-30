var obj = null;
if (window.location.pathname == '/analytics')
    obj = {
        "articles": [{
                "hits": 51,
                "name": "Very long article name Very long article name"
            },
            {
                "hits": 32,
                "name": "Test"
            },
            {
                "hits": 11,
                "name": "Test test test terst"
            },
            {
                "hits": 2,
                "name": "This is exmple name"
            },
            {
                "hits": 2,
                "name": "http://127.0.0.1:8000/ts/article/2"
            },
            {
                "hits": 1,
                "name": "http://127.0.0.1:8000/ts/article/3"
            },
            {
                "hits": 2,
                "name": "http://127.0.0.1:8000/mock/article/0"
            },
            {
                "hits": 1,
                "name": "http://127.0.0.1:8000/mock/article/2"
            },
            {
                "hits": 1,
                "name": "http://127.0.0.1:8000/mock/article/3"
            },
            {
                "hits": 1,
                "name": "http://127.0.0.1:8000/hs/article/1"
            },
            {
                "hits": 1,
                "name": "http://127.0.0.1:8000/mock/article/1"
            }
        ],
        "name": "Turun sanomat",
        "payment_percent": {
            "monthly": 0.32,
            "package": 0.36,
            "single": 0.32
        },
        "revenue": 1.0
    }
if (window.location.pathname == '/profile')
    obj = {'name': 'Testinen, Herra', 'email': 'kokeilu@malli.fi', 'end_date': '2019-08-22', 'prepaid': 12, 'bought': []}
