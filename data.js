// Mock E-Commerce dataset for Bangalore Mobile Accessories Company (serving 14 countries)
// Perfectly aligned with the Coding Ninjas Case Study DDL/DML details.
// Generated from real excel dataset containing 100 customers, 8 products, 200 orders, and 519 transaction items.

const DATABASE = {
  customers: [
  {
    "customer_id": 1,
    "name": "Ivana Chander",
    "email": "ivana.chander@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-02",
    "device_type": "iOS"
  },
  {
    "customer_id": 2,
    "name": "Charvi Kibe",
    "email": "charvi.kibe@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-03",
    "device_type": "Web"
  },
  {
    "customer_id": 3,
    "name": "Divij Chaudry",
    "email": "divij.chaudry@example.com",
    "location": "Chennai",
    "registration_date": "2023-01-04",
    "device_type": "Android"
  },
  {
    "customer_id": 4,
    "name": "Charvi Balay",
    "email": "charvi.balay@example.com",
    "location": "Pune",
    "registration_date": "2023-02-05",
    "device_type": "iOS"
  },
  {
    "customer_id": 5,
    "name": "Diya Arya",
    "email": "diya.arya@example.com",
    "location": "Pune",
    "registration_date": "2023-03-06",
    "device_type": "Web"
  },
  {
    "customer_id": 6,
    "name": "Dhruv Cherian",
    "email": "dhruv.cherian@example.com",
    "location": "Chennai",
    "registration_date": "2023-01-07",
    "device_type": "Android"
  },
  {
    "customer_id": 7,
    "name": "Myra Dubey",
    "email": "myra.dubey@example.com",
    "location": "Chennai",
    "registration_date": "2023-02-08",
    "device_type": "iOS"
  },
  {
    "customer_id": 8,
    "name": "Advika Wable",
    "email": "advika.wable@example.com",
    "location": "Delhi",
    "registration_date": "2023-03-09",
    "device_type": "Web"
  },
  {
    "customer_id": 9,
    "name": "Aarna Samra",
    "email": "aarna.samra@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-01-10",
    "device_type": "Android"
  },
  {
    "customer_id": 10,
    "name": "Ahana  Ray",
    "email": "ahana..ray@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-11",
    "device_type": "iOS"
  },
  {
    "customer_id": 11,
    "name": "Tanya Baria",
    "email": "tanya.baria@example.com",
    "location": "Lucknow",
    "registration_date": "2023-03-12",
    "device_type": "Web"
  },
  {
    "customer_id": 12,
    "name": "Kismat Sangha",
    "email": "kismat.sangha@example.com",
    "location": "Kolkata",
    "registration_date": "2023-01-13",
    "device_type": "Android"
  },
  {
    "customer_id": 13,
    "name": "Lakshit Walia",
    "email": "lakshit.walia@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-14",
    "device_type": "iOS"
  },
  {
    "customer_id": 14,
    "name": "Jayant Yohannan",
    "email": "jayant.yohannan@example.com",
    "location": "Lucknow",
    "registration_date": "2023-03-15",
    "device_type": "Web"
  },
  {
    "customer_id": 15,
    "name": "Jivika Tiwari",
    "email": "jivika.tiwari@example.com",
    "location": "Delhi",
    "registration_date": "2023-01-16",
    "device_type": "Android"
  },
  {
    "customer_id": 16,
    "name": "Adira Bhargava",
    "email": "adira.bhargava@example.com",
    "location": "Jaipur",
    "registration_date": "2023-02-17",
    "device_type": "iOS"
  },
  {
    "customer_id": 17,
    "name": "Rhea Issac",
    "email": "rhea.issac@example.com",
    "location": "Jaipur",
    "registration_date": "2023-03-18",
    "device_type": "Web"
  },
  {
    "customer_id": 18,
    "name": "Rasha Sarna",
    "email": "rasha.sarna@example.com",
    "location": "Jaipur",
    "registration_date": "2023-01-19",
    "device_type": "Android"
  },
  {
    "customer_id": 19,
    "name": "Sahil Chaudhary",
    "email": "sahil.chaudhary@example.com",
    "location": "Pune",
    "registration_date": "2023-02-20",
    "device_type": "iOS"
  },
  {
    "customer_id": 20,
    "name": "Shamik Mannan",
    "email": "shamik.mannan@example.com",
    "location": "Pune",
    "registration_date": "2023-03-21",
    "device_type": "Web"
  },
  {
    "customer_id": 21,
    "name": "Rati Jayaraman",
    "email": "rati.jayaraman@example.com",
    "location": "Lucknow",
    "registration_date": "2023-01-22",
    "device_type": "Android"
  },
  {
    "customer_id": 22,
    "name": "Hiran Deo",
    "email": "hiran.deo@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-23",
    "device_type": "iOS"
  },
  {
    "customer_id": 23,
    "name": "Shayak Chokshi",
    "email": "shayak.chokshi@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-24",
    "device_type": "Web"
  },
  {
    "customer_id": 24,
    "name": "Samar Sharaf",
    "email": "samar.sharaf@example.com",
    "location": "Mumbai",
    "registration_date": "2023-01-25",
    "device_type": "Android"
  },
  {
    "customer_id": 25,
    "name": "Miraya Bora",
    "email": "miraya.bora@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-26",
    "device_type": "iOS"
  },
  {
    "customer_id": 26,
    "name": "Anvi Atwal",
    "email": "anvi.atwal@example.com",
    "location": "Kolkata",
    "registration_date": "2023-03-27",
    "device_type": "Web"
  },
  {
    "customer_id": 27,
    "name": "Ahana  Divan",
    "email": "ahana..divan@example.com",
    "location": "Jaipur",
    "registration_date": "2023-01-28",
    "device_type": "Android"
  },
  {
    "customer_id": 28,
    "name": "Emir Brahmbhatt",
    "email": "emir.brahmbhatt@example.com",
    "location": "Lucknow",
    "registration_date": "2023-02-01",
    "device_type": "iOS"
  },
  {
    "customer_id": 29,
    "name": "Kaira Guha",
    "email": "kaira.guha@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-02",
    "device_type": "Web"
  },
  {
    "customer_id": 30,
    "name": "Hridaan Lala",
    "email": "hridaan.lala@example.com",
    "location": "Jaipur",
    "registration_date": "2023-01-03",
    "device_type": "Android"
  },
  {
    "customer_id": 31,
    "name": "Hiran Mandal",
    "email": "hiran.mandal@example.com",
    "location": "Mumbai",
    "registration_date": "2023-02-04",
    "device_type": "iOS"
  },
  {
    "customer_id": 32,
    "name": "Romil Bora",
    "email": "romil.bora@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-05",
    "device_type": "Web"
  },
  {
    "customer_id": 33,
    "name": "Jayan Bhatti",
    "email": "jayan.bhatti@example.com",
    "location": "Bangalore",
    "registration_date": "2023-01-06",
    "device_type": "Android"
  },
  {
    "customer_id": 34,
    "name": "Ishaan Walia",
    "email": "ishaan.walia@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-07",
    "device_type": "iOS"
  },
  {
    "customer_id": 35,
    "name": "Miraya Mand",
    "email": "miraya.mand@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-08",
    "device_type": "Web"
  },
  {
    "customer_id": 36,
    "name": "Ivana Acharya",
    "email": "ivana.acharya@example.com",
    "location": "Lucknow",
    "registration_date": "2023-01-09",
    "device_type": "Android"
  },
  {
    "customer_id": 37,
    "name": "Jayesh Butala",
    "email": "jayesh.butala@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-10",
    "device_type": "iOS"
  },
  {
    "customer_id": 38,
    "name": "Saksham Barman",
    "email": "saksham.barman@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-03-11",
    "device_type": "Web"
  },
  {
    "customer_id": 39,
    "name": "Piya Cheema",
    "email": "piya.cheema@example.com",
    "location": "Bangalore",
    "registration_date": "2023-01-12",
    "device_type": "Android"
  },
  {
    "customer_id": 40,
    "name": "Diya Mallick",
    "email": "diya.mallick@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-13",
    "device_type": "iOS"
  },
  {
    "customer_id": 41,
    "name": "Ehsaan Chand",
    "email": "ehsaan.chand@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-03-14",
    "device_type": "Web"
  },
  {
    "customer_id": 42,
    "name": "Shlok Dhingra",
    "email": "shlok.dhingra@example.com",
    "location": "Jaipur",
    "registration_date": "2023-01-15",
    "device_type": "Android"
  },
  {
    "customer_id": 43,
    "name": "Kavya Tak",
    "email": "kavya.tak@example.com",
    "location": "Bangalore",
    "registration_date": "2023-02-16",
    "device_type": "iOS"
  },
  {
    "customer_id": 44,
    "name": "Vritika Baral",
    "email": "vritika.baral@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-03-17",
    "device_type": "Web"
  },
  {
    "customer_id": 45,
    "name": "Hunar Rout",
    "email": "hunar.rout@example.com",
    "location": "Lucknow",
    "registration_date": "2023-01-18",
    "device_type": "Android"
  },
  {
    "customer_id": 46,
    "name": "Kismat Bajwa",
    "email": "kismat.bajwa@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-19",
    "device_type": "iOS"
  },
  {
    "customer_id": 47,
    "name": "Adah Dara",
    "email": "adah.dara@example.com",
    "location": "Delhi",
    "registration_date": "2023-03-20",
    "device_type": "Web"
  },
  {
    "customer_id": 48,
    "name": "Reyansh Golla",
    "email": "reyansh.golla@example.com",
    "location": "Jaipur",
    "registration_date": "2023-01-21",
    "device_type": "Android"
  },
  {
    "customer_id": 49,
    "name": "Yuvaan Krishnan",
    "email": "yuvaan.krishnan@example.com",
    "location": "Pune",
    "registration_date": "2023-02-22",
    "device_type": "iOS"
  },
  {
    "customer_id": 50,
    "name": "Pari Korpal",
    "email": "pari.korpal@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-03-23",
    "device_type": "Web"
  },
  {
    "customer_id": 51,
    "name": "Indrans Lanka",
    "email": "indrans.lanka@example.com",
    "location": "Lucknow",
    "registration_date": "2023-01-24",
    "device_type": "Android"
  },
  {
    "customer_id": 52,
    "name": "Khushi Goswami",
    "email": "khushi.goswami@example.com",
    "location": "Kolkata",
    "registration_date": "2023-02-25",
    "device_type": "iOS"
  },
  {
    "customer_id": 53,
    "name": "Himmat Dhillon",
    "email": "himmat.dhillon@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-03-26",
    "device_type": "Web"
  },
  {
    "customer_id": 54,
    "name": "Hazel Trivedi",
    "email": "hazel.trivedi@example.com",
    "location": "Delhi",
    "registration_date": "2023-01-27",
    "device_type": "Android"
  },
  {
    "customer_id": 55,
    "name": "Fateh Doshi",
    "email": "fateh.doshi@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-28",
    "device_type": "iOS"
  },
  {
    "customer_id": 56,
    "name": "Dhanush Banerjee",
    "email": "dhanush.banerjee@example.com",
    "location": "Pune",
    "registration_date": "2023-03-01",
    "device_type": "Web"
  },
  {
    "customer_id": 57,
    "name": "Diya Upadhyay",
    "email": "diya.upadhyay@example.com",
    "location": "Kolkata",
    "registration_date": "2023-01-02",
    "device_type": "Android"
  },
  {
    "customer_id": 58,
    "name": "Shanaya Chakrabarti",
    "email": "shanaya.chakrabarti@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-03",
    "device_type": "iOS"
  },
  {
    "customer_id": 59,
    "name": "Yasmin Mallick",
    "email": "yasmin.mallick@example.com",
    "location": "Bangalore",
    "registration_date": "2023-03-04",
    "device_type": "Web"
  },
  {
    "customer_id": 60,
    "name": "Ranbir Dewan",
    "email": "ranbir.dewan@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-01-05",
    "device_type": "Android"
  },
  {
    "customer_id": 61,
    "name": "Saksham Buch",
    "email": "saksham.buch@example.com",
    "location": "Kolkata",
    "registration_date": "2023-02-06",
    "device_type": "iOS"
  },
  {
    "customer_id": 62,
    "name": "Himmat Mani",
    "email": "himmat.mani@example.com",
    "location": "Delhi",
    "registration_date": "2023-03-07",
    "device_type": "Web"
  },
  {
    "customer_id": 63,
    "name": "Kiaan Tiwari",
    "email": "kiaan.tiwari@example.com",
    "location": "Bangalore",
    "registration_date": "2023-01-08",
    "device_type": "Android"
  },
  {
    "customer_id": 64,
    "name": "Jayan Loke",
    "email": "jayan.loke@example.com",
    "location": "Chennai",
    "registration_date": "2023-02-09",
    "device_type": "iOS"
  },
  {
    "customer_id": 65,
    "name": "Shanaya Desai",
    "email": "shanaya.desai@example.com",
    "location": "Kolkata",
    "registration_date": "2023-03-10",
    "device_type": "Web"
  },
  {
    "customer_id": 66,
    "name": "Ahana  Korpal",
    "email": "ahana..korpal@example.com",
    "location": "Delhi",
    "registration_date": "2023-01-11",
    "device_type": "Android"
  },
  {
    "customer_id": 67,
    "name": "Renee Korpal",
    "email": "renee.korpal@example.com",
    "location": "Lucknow",
    "registration_date": "2023-02-12",
    "device_type": "iOS"
  },
  {
    "customer_id": 68,
    "name": "Ayesha Wali",
    "email": "ayesha.wali@example.com",
    "location": "Chennai",
    "registration_date": "2023-03-13",
    "device_type": "Web"
  },
  {
    "customer_id": 69,
    "name": "Miraan Koshy",
    "email": "miraan.koshy@example.com",
    "location": "Kolkata",
    "registration_date": "2023-01-14",
    "device_type": "Android"
  },
  {
    "customer_id": 70,
    "name": "Dhruv Rajagopal",
    "email": "dhruv.rajagopal@example.com",
    "location": "Delhi",
    "registration_date": "2023-02-15",
    "device_type": "iOS"
  },
  {
    "customer_id": 71,
    "name": "Nirvi Agate",
    "email": "nirvi.agate@example.com",
    "location": "Bangalore",
    "registration_date": "2023-03-16",
    "device_type": "Web"
  },
  {
    "customer_id": 72,
    "name": "Ela Kade",
    "email": "ela.kade@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-01-17",
    "device_type": "Android"
  },
  {
    "customer_id": 73,
    "name": "Prisha Tara",
    "email": "prisha.tara@example.com",
    "location": "Chennai",
    "registration_date": "2023-02-18",
    "device_type": "iOS"
  },
  {
    "customer_id": 74,
    "name": "Indrajit Dugar",
    "email": "indrajit.dugar@example.com",
    "location": "Pune",
    "registration_date": "2023-03-19",
    "device_type": "Web"
  },
  {
    "customer_id": 75,
    "name": "Ryan Ahluwalia",
    "email": "ryan.ahluwalia@example.com",
    "location": "Delhi",
    "registration_date": "2023-01-20",
    "device_type": "Android"
  },
  {
    "customer_id": 76,
    "name": "Rania Chokshi",
    "email": "rania.chokshi@example.com",
    "location": "Kolkata",
    "registration_date": "2023-02-21",
    "device_type": "iOS"
  },
  {
    "customer_id": 77,
    "name": "Kabir Sundaram",
    "email": "kabir.sundaram@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-03-22",
    "device_type": "Web"
  },
  {
    "customer_id": 78,
    "name": "Yuvraj  Bir",
    "email": "yuvraj..bir@example.com",
    "location": "Chennai",
    "registration_date": "2023-01-23",
    "device_type": "Android"
  },
  {
    "customer_id": 79,
    "name": "Shamik Ben",
    "email": "shamik.ben@example.com",
    "location": "Pune",
    "registration_date": "2023-02-24",
    "device_type": "iOS"
  },
  {
    "customer_id": 80,
    "name": "Anika Wali",
    "email": "anika.wali@example.com",
    "location": "Delhi",
    "registration_date": "2023-03-25",
    "device_type": "Web"
  },
  {
    "customer_id": 81,
    "name": "Akarsh Loyal",
    "email": "akarsh.loyal@example.com",
    "location": "Chennai",
    "registration_date": "2023-01-26",
    "device_type": "Android"
  },
  {
    "customer_id": 82,
    "name": "Gatik Chakrabarti",
    "email": "gatik.chakrabarti@example.com",
    "location": "Mumbai",
    "registration_date": "2023-02-27",
    "device_type": "iOS"
  },
  {
    "customer_id": 83,
    "name": "Ira Madan",
    "email": "ira.madan@example.com",
    "location": "Mumbai",
    "registration_date": "2023-03-28",
    "device_type": "Web"
  },
  {
    "customer_id": 84,
    "name": "Gokul Chhabra",
    "email": "gokul.chhabra@example.com",
    "location": "Delhi",
    "registration_date": "2023-01-01",
    "device_type": "Android"
  },
  {
    "customer_id": 85,
    "name": "Aarna Kurian",
    "email": "aarna.kurian@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-02-02",
    "device_type": "iOS"
  },
  {
    "customer_id": 86,
    "name": "Advika Wali",
    "email": "advika.wali@example.com",
    "location": "Jaipur",
    "registration_date": "2023-03-03",
    "device_type": "Web"
  },
  {
    "customer_id": 87,
    "name": "Jayesh Gill",
    "email": "jayesh.gill@example.com",
    "location": "Chennai",
    "registration_date": "2023-01-04",
    "device_type": "Android"
  },
  {
    "customer_id": 88,
    "name": "Sumer Dora",
    "email": "sumer.dora@example.com",
    "location": "Chennai",
    "registration_date": "2023-02-05",
    "device_type": "iOS"
  },
  {
    "customer_id": 89,
    "name": "Adah Yogi",
    "email": "adah.yogi@example.com",
    "location": "Jaipur",
    "registration_date": "2023-03-06",
    "device_type": "Web"
  },
  {
    "customer_id": 90,
    "name": "Anika Kaul",
    "email": "anika.kaul@example.com",
    "location": "Lucknow",
    "registration_date": "2023-01-07",
    "device_type": "Android"
  },
  {
    "customer_id": 91,
    "name": "Riya Sagar",
    "email": "riya.sagar@example.com",
    "location": "Jaipur",
    "registration_date": "2023-02-08",
    "device_type": "iOS"
  },
  {
    "customer_id": 92,
    "name": "Nitya Viswanathan",
    "email": "nitya.viswanathan@example.com",
    "location": "Hyderabad",
    "registration_date": "2023-03-09",
    "device_type": "Web"
  },
  {
    "customer_id": 93,
    "name": "Yuvaan Dhar",
    "email": "yuvaan.dhar@example.com",
    "location": "Pune",
    "registration_date": "2023-01-10",
    "device_type": "Android"
  },
  {
    "customer_id": 94,
    "name": "Yakshit Mangal",
    "email": "yakshit.mangal@example.com",
    "location": "Pune",
    "registration_date": "2023-02-11",
    "device_type": "iOS"
  },
  {
    "customer_id": 95,
    "name": "Kartik Bhakta",
    "email": "kartik.bhakta@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-03-12",
    "device_type": "Web"
  },
  {
    "customer_id": 96,
    "name": "Veer Vaidya",
    "email": "veer.vaidya@example.com",
    "location": "Bangalore",
    "registration_date": "2023-01-13",
    "device_type": "Android"
  },
  {
    "customer_id": 97,
    "name": "Saanvi Sani",
    "email": "saanvi.sani@example.com",
    "location": "Ahmedabad",
    "registration_date": "2023-02-14",
    "device_type": "iOS"
  },
  {
    "customer_id": 98,
    "name": "Aniruddh Arya",
    "email": "aniruddh.arya@example.com",
    "location": "Jaipur",
    "registration_date": "2023-03-15",
    "device_type": "Web"
  },
  {
    "customer_id": 99,
    "name": "Jayant Kade",
    "email": "jayant.kade@example.com",
    "location": "Mumbai",
    "registration_date": "2023-01-16",
    "device_type": "Android"
  },
  {
    "customer_id": 100,
    "name": "Kimaya Sur",
    "email": "kimaya.sur@example.com",
    "location": "Bangalore",
    "registration_date": "2023-02-17",
    "device_type": "iOS"
  }
],
  products: [
  {
    "product_id": 1,
    "name": "Smartphone 6\"",
    "category": "Electronics",
    "price": 15000.0,
    "cost": 5250.0,
    "stock_quantity": 173
  },
  {
    "product_id": 2,
    "name": "Laptop 15\" Pro",
    "category": "Electronics",
    "price": 60000.0,
    "cost": 21000.0,
    "stock_quantity": 246
  },
  {
    "product_id": 3,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "price": 8000.0,
    "cost": 2800.0,
    "stock_quantity": 319
  },
  {
    "product_id": 4,
    "name": "E-Book Reader",
    "category": "Electronics",
    "price": 12000.0,
    "cost": 4200.0,
    "stock_quantity": 392
  },
  {
    "product_id": 5,
    "name": "Smartwatch Fitness Tracker",
    "category": "Wearable Tech",
    "price": 5000.0,
    "cost": 1750.0,
    "stock_quantity": 465
  },
  {
    "product_id": 6,
    "name": "Portable Bluetooth Speaker",
    "category": "Electronics",
    "price": 7000.0,
    "cost": 2450.0,
    "stock_quantity": 538
  },
  {
    "product_id": 7,
    "name": "Digital SLR Camera",
    "category": "Photography",
    "price": 40000.0,
    "cost": 14000.0,
    "stock_quantity": 611
  },
  {
    "product_id": 8,
    "name": "Wireless Earbuds",
    "category": "Wearable Tech",
    "price": 3000.0,
    "cost": 1050.0,
    "stock_quantity": 684
  }
],
  sales_reps: [
  {
    "sales_rep_id": 201,
    "rep_name": "Karan Verma",
    "region": "Domestic (India)",
    "target_sales": 1500000
  },
  {
    "sales_rep_id": 202,
    "rep_name": "Jessica Taylor",
    "region": "Americas",
    "target_sales": 2000000
  },
  {
    "sales_rep_id": 203,
    "rep_name": "Liam O'Connor",
    "region": "Europe & MEA",
    "target_sales": 1800000
  },
  {
    "sales_rep_id": 204,
    "rep_name": "Mei Ling",
    "region": "Asia-Pacific",
    "target_sales": 1200000
  }
],
  orders: [
  {
    "order_id": 1,
    "customer_id": 67,
    "order_date": "2023-09-27",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 45000.0
  },
  {
    "order_id": 2,
    "customer_id": 98,
    "order_date": "2023-11-19",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 16000.0
  },
  {
    "order_id": 3,
    "customer_id": 46,
    "order_date": "2023-12-20",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 260000.0
  },
  {
    "order_id": 4,
    "customer_id": 83,
    "order_date": "2023-04-29",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 27000.0
  },
  {
    "order_id": 5,
    "customer_id": 99,
    "order_date": "2023-04-05",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 221000.0
  },
  {
    "order_id": 6,
    "customer_id": 59,
    "order_date": "2023-05-29",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 120000.0
  },
  {
    "order_id": 7,
    "customer_id": 68,
    "order_date": "2023-04-26",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 30000.0
  },
  {
    "order_id": 8,
    "customer_id": 24,
    "order_date": "2023-08-06",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 64000.0
  },
  {
    "order_id": 9,
    "customer_id": 61,
    "order_date": "2023-12-17",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 250000.0
  },
  {
    "order_id": 10,
    "customer_id": 38,
    "order_date": "2023-10-04",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 53000.0
  },
  {
    "order_id": 11,
    "customer_id": 95,
    "order_date": "2023-10-16",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 129000.0
  },
  {
    "order_id": 12,
    "customer_id": 78,
    "order_date": "2023-07-30",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 15000.0
  },
  {
    "order_id": 13,
    "customer_id": 24,
    "order_date": "2023-12-15",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 158000.0
  },
  {
    "order_id": 14,
    "customer_id": 17,
    "order_date": "2023-04-07",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 72000.0
  },
  {
    "order_id": 15,
    "customer_id": 58,
    "order_date": "2023-05-09",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 21000.0
  },
  {
    "order_id": 16,
    "customer_id": 36,
    "order_date": "2023-09-27",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 340000.0
  },
  {
    "order_id": 17,
    "customer_id": 68,
    "order_date": "2023-07-31",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 36000.0
  },
  {
    "order_id": 18,
    "customer_id": 78,
    "order_date": "2023-09-07",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 282000.0
  },
  {
    "order_id": 19,
    "customer_id": 22,
    "order_date": "2023-05-18",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 128000.0
  },
  {
    "order_id": 20,
    "customer_id": 61,
    "order_date": "2023-06-15",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 23000.0
  },
  {
    "order_id": 21,
    "customer_id": 28,
    "order_date": "2023-04-12",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 18000.0
  },
  {
    "order_id": 22,
    "customer_id": 39,
    "order_date": "2023-08-27",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 37000.0
  },
  {
    "order_id": 23,
    "customer_id": 48,
    "order_date": "2023-05-24",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 12000.0
  },
  {
    "order_id": 24,
    "customer_id": 83,
    "order_date": "2023-05-12",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 91000.0
  },
  {
    "order_id": 25,
    "customer_id": 86,
    "order_date": "2023-05-21",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 51000.0
  },
  {
    "order_id": 26,
    "customer_id": 23,
    "order_date": "2023-05-01",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 24000.0
  },
  {
    "order_id": 27,
    "customer_id": 84,
    "order_date": "2023-10-25",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 66000.0
  },
  {
    "order_id": 28,
    "customer_id": 52,
    "order_date": "2024-02-18",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 9000.0
  },
  {
    "order_id": 29,
    "customer_id": 11,
    "order_date": "2023-11-04",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 15000.0
  },
  {
    "order_id": 30,
    "customer_id": 9,
    "order_date": "2023-09-10",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 12000.0
  },
  {
    "order_id": 31,
    "customer_id": 49,
    "order_date": "2023-08-13",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 85000.0
  },
  {
    "order_id": 32,
    "customer_id": 95,
    "order_date": "2023-07-19",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 135000.0
  },
  {
    "order_id": 33,
    "customer_id": 7,
    "order_date": "2023-11-10",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 12000.0
  },
  {
    "order_id": 34,
    "customer_id": 57,
    "order_date": "2023-10-27",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 40000.0
  },
  {
    "order_id": 35,
    "customer_id": 14,
    "order_date": "2023-07-04",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 5000.0
  },
  {
    "order_id": 36,
    "customer_id": 16,
    "order_date": "2023-07-13",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 15000.0
  },
  {
    "order_id": 37,
    "customer_id": 4,
    "order_date": "2023-12-29",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 260000.0
  },
  {
    "order_id": 38,
    "customer_id": 59,
    "order_date": "2023-08-17",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 324000.0
  },
  {
    "order_id": 39,
    "customer_id": 16,
    "order_date": "2023-07-08",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 50000.0
  },
  {
    "order_id": 40,
    "customer_id": 99,
    "order_date": "2023-11-23",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 48000.0
  },
  {
    "order_id": 41,
    "customer_id": 91,
    "order_date": "2023-03-16",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 39000.0
  },
  {
    "order_id": 42,
    "customer_id": 88,
    "order_date": "2024-02-19",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 33000.0
  },
  {
    "order_id": 43,
    "customer_id": 11,
    "order_date": "2024-01-08",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 51000.0
  },
  {
    "order_id": 44,
    "customer_id": 88,
    "order_date": "2023-04-19",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 213000.0
  },
  {
    "order_id": 45,
    "customer_id": 22,
    "order_date": "2023-09-26",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 45000.0
  },
  {
    "order_id": 46,
    "customer_id": 87,
    "order_date": "2023-04-09",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 69000.0
  },
  {
    "order_id": 47,
    "customer_id": 100,
    "order_date": "2023-11-01",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 7000.0
  },
  {
    "order_id": 48,
    "customer_id": 68,
    "order_date": "2023-07-03",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 186000.0
  },
  {
    "order_id": 49,
    "customer_id": 85,
    "order_date": "2023-10-10",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 54000.0
  },
  {
    "order_id": 50,
    "customer_id": 11,
    "order_date": "2023-12-03",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 63000.0
  },
  {
    "order_id": 51,
    "customer_id": 20,
    "order_date": "2023-12-13",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 176000.0
  },
  {
    "order_id": 52,
    "customer_id": 95,
    "order_date": "2023-12-24",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 199000.0
  },
  {
    "order_id": 53,
    "customer_id": 67,
    "order_date": "2023-04-05",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 147000.0
  },
  {
    "order_id": 54,
    "customer_id": 28,
    "order_date": "2023-10-31",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 198000.0
  },
  {
    "order_id": 55,
    "customer_id": 57,
    "order_date": "2023-07-19",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 16000.0
  },
  {
    "order_id": 56,
    "customer_id": 10,
    "order_date": "2023-05-15",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 74000.0
  },
  {
    "order_id": 57,
    "customer_id": 64,
    "order_date": "2023-09-24",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 224000.0
  },
  {
    "order_id": 58,
    "customer_id": 40,
    "order_date": "2023-03-12",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 114000.0
  },
  {
    "order_id": 59,
    "customer_id": 85,
    "order_date": "2023-05-06",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 187000.0
  },
  {
    "order_id": 60,
    "customer_id": 23,
    "order_date": "2023-04-12",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 177000.0
  },
  {
    "order_id": 61,
    "customer_id": 87,
    "order_date": "2023-06-12",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 3000.0
  },
  {
    "order_id": 62,
    "customer_id": 17,
    "order_date": "2024-01-03",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 272000.0
  },
  {
    "order_id": 63,
    "customer_id": 85,
    "order_date": "2023-08-26",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 74000.0
  },
  {
    "order_id": 64,
    "customer_id": 26,
    "order_date": "2023-08-18",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 109000.0
  },
  {
    "order_id": 65,
    "customer_id": 57,
    "order_date": "2023-09-27",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 101000.0
  },
  {
    "order_id": 66,
    "customer_id": 17,
    "order_date": "2023-09-03",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 235000.0
  },
  {
    "order_id": 67,
    "customer_id": 96,
    "order_date": "2024-01-20",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 24000.0
  },
  {
    "order_id": 68,
    "customer_id": 78,
    "order_date": "2024-01-07",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 145000.0
  },
  {
    "order_id": 69,
    "customer_id": 25,
    "order_date": "2023-07-23",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 75000.0
  },
  {
    "order_id": 70,
    "customer_id": 11,
    "order_date": "2023-08-29",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 73000.0
  },
  {
    "order_id": 71,
    "customer_id": 5,
    "order_date": "2024-02-03",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 38000.0
  },
  {
    "order_id": 72,
    "customer_id": 47,
    "order_date": "2024-02-08",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 33000.0
  },
  {
    "order_id": 73,
    "customer_id": 37,
    "order_date": "2023-08-06",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 43000.0
  },
  {
    "order_id": 74,
    "customer_id": 54,
    "order_date": "2023-05-18",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 106000.0
  },
  {
    "order_id": 75,
    "customer_id": 14,
    "order_date": "2023-07-19",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 74000.0
  },
  {
    "order_id": 76,
    "customer_id": 41,
    "order_date": "2024-01-21",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 239000.0
  },
  {
    "order_id": 77,
    "customer_id": 75,
    "order_date": "2023-10-04",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 24000.0
  },
  {
    "order_id": 78,
    "customer_id": 63,
    "order_date": "2023-06-28",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 141000.0
  },
  {
    "order_id": 79,
    "customer_id": 75,
    "order_date": "2023-07-11",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 29000.0
  },
  {
    "order_id": 80,
    "customer_id": 68,
    "order_date": "2023-04-05",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 35000.0
  },
  {
    "order_id": 81,
    "customer_id": 39,
    "order_date": "2023-08-15",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 76000.0
  },
  {
    "order_id": 82,
    "customer_id": 18,
    "order_date": "2023-05-10",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 84000.0
  },
  {
    "order_id": 83,
    "customer_id": 16,
    "order_date": "2024-02-08",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 83000.0
  },
  {
    "order_id": 84,
    "customer_id": 58,
    "order_date": "2023-12-22",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 83000.0
  },
  {
    "order_id": 85,
    "customer_id": 76,
    "order_date": "2023-04-06",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 40000.0
  },
  {
    "order_id": 86,
    "customer_id": 52,
    "order_date": "2023-07-30",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 77000.0
  },
  {
    "order_id": 87,
    "customer_id": 91,
    "order_date": "2023-09-27",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 44000.0
  },
  {
    "order_id": 88,
    "customer_id": 92,
    "order_date": "2023-07-22",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 21000.0
  },
  {
    "order_id": 89,
    "customer_id": 34,
    "order_date": "2023-11-18",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 149000.0
  },
  {
    "order_id": 90,
    "customer_id": 12,
    "order_date": "2023-04-30",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 185000.0
  },
  {
    "order_id": 91,
    "customer_id": 51,
    "order_date": "2024-02-24",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 95000.0
  },
  {
    "order_id": 92,
    "customer_id": 80,
    "order_date": "2023-05-06",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 15000.0
  },
  {
    "order_id": 93,
    "customer_id": 72,
    "order_date": "2023-03-17",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 80000.0
  },
  {
    "order_id": 94,
    "customer_id": 40,
    "order_date": "2023-10-14",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 67000.0
  },
  {
    "order_id": 95,
    "customer_id": 63,
    "order_date": "2023-12-02",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 40000.0
  },
  {
    "order_id": 96,
    "customer_id": 76,
    "order_date": "2023-11-04",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 180000.0
  },
  {
    "order_id": 97,
    "customer_id": 31,
    "order_date": "2023-08-10",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 84000.0
  },
  {
    "order_id": 98,
    "customer_id": 42,
    "order_date": "2023-12-07",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 144000.0
  },
  {
    "order_id": 99,
    "customer_id": 57,
    "order_date": "2023-03-29",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 192000.0
  },
  {
    "order_id": 100,
    "customer_id": 57,
    "order_date": "2023-04-14",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 124000.0
  },
  {
    "order_id": 101,
    "customer_id": 75,
    "order_date": "2024-02-11",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 24000.0
  },
  {
    "order_id": 102,
    "customer_id": 66,
    "order_date": "2023-04-11",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 21000.0
  },
  {
    "order_id": 103,
    "customer_id": 45,
    "order_date": "2024-02-21",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 57000.0
  },
  {
    "order_id": 104,
    "customer_id": 5,
    "order_date": "2023-09-03",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 37000.0
  },
  {
    "order_id": 105,
    "customer_id": 32,
    "order_date": "2023-07-03",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 46000.0
  },
  {
    "order_id": 106,
    "customer_id": 94,
    "order_date": "2023-03-11",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 48000.0
  },
  {
    "order_id": 107,
    "customer_id": 81,
    "order_date": "2023-06-27",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 313000.0
  },
  {
    "order_id": 108,
    "customer_id": 35,
    "order_date": "2023-05-11",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 240000.0
  },
  {
    "order_id": 109,
    "customer_id": 35,
    "order_date": "2023-10-23",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 223000.0
  },
  {
    "order_id": 110,
    "customer_id": 75,
    "order_date": "2023-07-20",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 24000.0
  },
  {
    "order_id": 111,
    "customer_id": 32,
    "order_date": "2023-11-14",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 44000.0
  },
  {
    "order_id": 112,
    "customer_id": 93,
    "order_date": "2023-04-26",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 29000.0
  },
  {
    "order_id": 113,
    "customer_id": 61,
    "order_date": "2023-04-15",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 50000.0
  },
  {
    "order_id": 114,
    "customer_id": 57,
    "order_date": "2023-12-12",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 17000.0
  },
  {
    "order_id": 115,
    "customer_id": 30,
    "order_date": "2023-03-30",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 68000.0
  },
  {
    "order_id": 116,
    "customer_id": 45,
    "order_date": "2023-03-29",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 58000.0
  },
  {
    "order_id": 117,
    "customer_id": 19,
    "order_date": "2023-07-17",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 321000.0
  },
  {
    "order_id": 118,
    "customer_id": 94,
    "order_date": "2023-03-27",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 24000.0
  },
  {
    "order_id": 119,
    "customer_id": 17,
    "order_date": "2023-08-01",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 285000.0
  },
  {
    "order_id": 120,
    "customer_id": 51,
    "order_date": "2024-01-19",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 29000.0
  },
  {
    "order_id": 121,
    "customer_id": 50,
    "order_date": "2023-08-05",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 124000.0
  },
  {
    "order_id": 122,
    "customer_id": 90,
    "order_date": "2023-10-09",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 8000.0
  },
  {
    "order_id": 123,
    "customer_id": 32,
    "order_date": "2023-11-24",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 345000.0
  },
  {
    "order_id": 124,
    "customer_id": 24,
    "order_date": "2024-01-19",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 143000.0
  },
  {
    "order_id": 125,
    "customer_id": 2,
    "order_date": "2023-09-02",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 68000.0
  },
  {
    "order_id": 126,
    "customer_id": 72,
    "order_date": "2023-03-06",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 54000.0
  },
  {
    "order_id": 127,
    "customer_id": 84,
    "order_date": "2023-09-27",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 129000.0
  },
  {
    "order_id": 128,
    "customer_id": 26,
    "order_date": "2023-09-26",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 152000.0
  },
  {
    "order_id": 129,
    "customer_id": 33,
    "order_date": "2023-09-29",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 93000.0
  },
  {
    "order_id": 130,
    "customer_id": 70,
    "order_date": "2023-03-31",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 10000.0
  },
  {
    "order_id": 131,
    "customer_id": 84,
    "order_date": "2023-12-11",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 160000.0
  },
  {
    "order_id": 132,
    "customer_id": 72,
    "order_date": "2023-09-22",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 91000.0
  },
  {
    "order_id": 133,
    "customer_id": 84,
    "order_date": "2023-04-23",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 21000.0
  },
  {
    "order_id": 134,
    "customer_id": 92,
    "order_date": "2024-01-30",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 187000.0
  },
  {
    "order_id": 135,
    "customer_id": 33,
    "order_date": "2023-05-06",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 143000.0
  },
  {
    "order_id": 136,
    "customer_id": 98,
    "order_date": "2023-09-10",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 126000.0
  },
  {
    "order_id": 137,
    "customer_id": 2,
    "order_date": "2023-05-29",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 151000.0
  },
  {
    "order_id": 138,
    "customer_id": 57,
    "order_date": "2023-11-05",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 83000.0
  },
  {
    "order_id": 139,
    "customer_id": 88,
    "order_date": "2023-07-31",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 21000.0
  },
  {
    "order_id": 140,
    "customer_id": 92,
    "order_date": "2023-10-14",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 64000.0
  },
  {
    "order_id": 141,
    "customer_id": 61,
    "order_date": "2023-07-24",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 51000.0
  },
  {
    "order_id": 142,
    "customer_id": 10,
    "order_date": "2023-04-16",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 50000.0
  },
  {
    "order_id": 143,
    "customer_id": 36,
    "order_date": "2023-05-16",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 33000.0
  },
  {
    "order_id": 144,
    "customer_id": 73,
    "order_date": "2023-06-15",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 30000.0
  },
  {
    "order_id": 145,
    "customer_id": 52,
    "order_date": "2023-09-21",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 132000.0
  },
  {
    "order_id": 146,
    "customer_id": 48,
    "order_date": "2023-12-10",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 112000.0
  },
  {
    "order_id": 147,
    "customer_id": 10,
    "order_date": "2023-09-30",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 48000.0
  },
  {
    "order_id": 148,
    "customer_id": 24,
    "order_date": "2024-01-05",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 328000.0
  },
  {
    "order_id": 149,
    "customer_id": 63,
    "order_date": "2024-01-29",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 120000.0
  },
  {
    "order_id": 150,
    "customer_id": 49,
    "order_date": "2023-10-08",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 121000.0
  },
  {
    "order_id": 151,
    "customer_id": 14,
    "order_date": "2023-12-01",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 8000.0
  },
  {
    "order_id": 152,
    "customer_id": 41,
    "order_date": "2023-12-08",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 36000.0
  },
  {
    "order_id": 153,
    "customer_id": 4,
    "order_date": "2023-10-01",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 33000.0
  },
  {
    "order_id": 154,
    "customer_id": 14,
    "order_date": "2023-03-11",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 88000.0
  },
  {
    "order_id": 155,
    "customer_id": 18,
    "order_date": "2023-04-04",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 44000.0
  },
  {
    "order_id": 156,
    "customer_id": 41,
    "order_date": "2023-07-10",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 201000.0
  },
  {
    "order_id": 157,
    "customer_id": 29,
    "order_date": "2023-10-24",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 145000.0
  },
  {
    "order_id": 158,
    "customer_id": 57,
    "order_date": "2023-07-11",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 21000.0
  },
  {
    "order_id": 159,
    "customer_id": 54,
    "order_date": "2023-04-25",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 5000.0
  },
  {
    "order_id": 160,
    "customer_id": 38,
    "order_date": "2023-12-28",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 305000.0
  },
  {
    "order_id": 161,
    "customer_id": 86,
    "order_date": "2023-03-21",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 6000.0
  },
  {
    "order_id": 162,
    "customer_id": 66,
    "order_date": "2023-05-25",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 62000.0
  },
  {
    "order_id": 163,
    "customer_id": 54,
    "order_date": "2023-11-27",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 96000.0
  },
  {
    "order_id": 164,
    "customer_id": 32,
    "order_date": "2023-11-05",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 156000.0
  },
  {
    "order_id": 165,
    "customer_id": 22,
    "order_date": "2023-09-25",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 62000.0
  },
  {
    "order_id": 166,
    "customer_id": 71,
    "order_date": "2023-12-25",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 128000.0
  },
  {
    "order_id": 167,
    "customer_id": 61,
    "order_date": "2023-09-02",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 53000.0
  },
  {
    "order_id": 168,
    "customer_id": 100,
    "order_date": "2023-09-25",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 330000.0
  },
  {
    "order_id": 169,
    "customer_id": 11,
    "order_date": "2023-05-19",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 40000.0
  },
  {
    "order_id": 170,
    "customer_id": 37,
    "order_date": "2024-02-17",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 24000.0
  },
  {
    "order_id": 171,
    "customer_id": 68,
    "order_date": "2024-01-18",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 3000.0
  },
  {
    "order_id": 172,
    "customer_id": 32,
    "order_date": "2023-06-06",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 66000.0
  },
  {
    "order_id": 173,
    "customer_id": 7,
    "order_date": "2023-03-16",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 8000.0
  },
  {
    "order_id": 174,
    "customer_id": 84,
    "order_date": "2023-12-14",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 216000.0
  },
  {
    "order_id": 175,
    "customer_id": 91,
    "order_date": "2023-07-16",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 228000.0
  },
  {
    "order_id": 176,
    "customer_id": 25,
    "order_date": "2023-08-19",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 60000.0
  },
  {
    "order_id": 177,
    "customer_id": 51,
    "order_date": "2023-07-20",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 145000.0
  },
  {
    "order_id": 178,
    "customer_id": 88,
    "order_date": "2023-12-25",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 69000.0
  },
  {
    "order_id": 179,
    "customer_id": 41,
    "order_date": "2023-10-15",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 82000.0
  },
  {
    "order_id": 180,
    "customer_id": 51,
    "order_date": "2023-10-12",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 60000.0
  },
  {
    "order_id": 181,
    "customer_id": 100,
    "order_date": "2023-08-07",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 276000.0
  },
  {
    "order_id": 182,
    "customer_id": 90,
    "order_date": "2023-06-06",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 172000.0
  },
  {
    "order_id": 183,
    "customer_id": 13,
    "order_date": "2023-08-08",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 46000.0
  },
  {
    "order_id": 184,
    "customer_id": 44,
    "order_date": "2023-07-08",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 35000.0
  },
  {
    "order_id": 185,
    "customer_id": 38,
    "order_date": "2023-10-13",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 69000.0
  },
  {
    "order_id": 186,
    "customer_id": 98,
    "order_date": "2023-09-16",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 104000.0
  },
  {
    "order_id": 187,
    "customer_id": 60,
    "order_date": "2023-06-16",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 21000.0
  },
  {
    "order_id": 188,
    "customer_id": 51,
    "order_date": "2023-07-01",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 384000.0
  },
  {
    "order_id": 189,
    "customer_id": 86,
    "order_date": "2023-12-25",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 12000.0
  },
  {
    "order_id": 190,
    "customer_id": 37,
    "order_date": "2023-07-28",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 125000.0
  },
  {
    "order_id": 191,
    "customer_id": 53,
    "order_date": "2024-01-10",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 14000.0
  },
  {
    "order_id": 192,
    "customer_id": 43,
    "order_date": "2023-08-23",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 40000.0
  },
  {
    "order_id": 193,
    "customer_id": 1,
    "order_date": "2023-10-17",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 61000.0
  },
  {
    "order_id": 194,
    "customer_id": 75,
    "order_date": "2023-12-31",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 78000.0
  },
  {
    "order_id": 195,
    "customer_id": 32,
    "order_date": "2023-07-13",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 232000.0
  },
  {
    "order_id": 196,
    "customer_id": 87,
    "order_date": "2023-04-16",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 126000.0
  },
  {
    "order_id": 197,
    "customer_id": 78,
    "order_date": "2023-06-02",
    "order_method": "Website",
    "sales_rep_id": 202,
    "total_amount": 120000.0
  },
  {
    "order_id": 198,
    "customer_id": 60,
    "order_date": "2023-09-17",
    "order_method": "WhatsApp",
    "sales_rep_id": 203,
    "total_amount": 151000.0
  },
  {
    "order_id": 199,
    "customer_id": 69,
    "order_date": "2023-09-22",
    "order_method": "Helpline",
    "sales_rep_id": 204,
    "total_amount": 23000.0
  },
  {
    "order_id": 200,
    "customer_id": 4,
    "order_date": "2023-06-15",
    "order_method": "App",
    "sales_rep_id": 201,
    "total_amount": 151000.0
  }
],
  order_details: [
  {
    "order_id": 1,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 2,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 3,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 3,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 3,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 4,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 4,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 5,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 5,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 5,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 6,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 6,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 7,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 8,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 8,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 8,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 8,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 9,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 9,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 9,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 9,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 10,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 10,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 10,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 11,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 11,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 11,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 11,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 12,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 12,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 13,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 13,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 13,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 13,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 14,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 14,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 15,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 16,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 16,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 16,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 16,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 17,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 17,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 18,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 18,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 18,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 18,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 19,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 19,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 20,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 20,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 21,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 21,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 22,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 22,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 23,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 24,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 24,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 24,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 24,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 25,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 25,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 26,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 26,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 26,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 27,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 27,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 27,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 28,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 29,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 30,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 31,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 31,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 31,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 32,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 32,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 32,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 33,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 34,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 35,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 36,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 36,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 37,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 37,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 38,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 38,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 38,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 39,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 39,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 40,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 40,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 41,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 41,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 42,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 42,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 42,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 43,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 43,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 44,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 44,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 44,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 44,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 45,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 46,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 46,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 47,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 48,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 48,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 48,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 48,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 49,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 49,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 49,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 50,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 50,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 51,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 51,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 51,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 52,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 52,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 52,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 53,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 53,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 53,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 54,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 54,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 54,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 54,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 55,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 56,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 56,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 56,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 56,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 57,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 57,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 57,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 58,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 58,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 58,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 59,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 59,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 59,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 60,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 60,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 60,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 61,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 62,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 62,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 62,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 62,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 63,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 63,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 63,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 64,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 64,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 64,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 65,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 65,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 65,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 65,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 66,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 66,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 66,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 67,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 67,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 68,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 68,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 68,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 69,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 69,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 70,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 70,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 70,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 71,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 71,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 72,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 72,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 73,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 73,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 74,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 74,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 74,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 74,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 75,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 75,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 75,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 75,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 76,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 76,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 76,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 76,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 77,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 78,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 78,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 78,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 79,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 79,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 79,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 79,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 80,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 80,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 80,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 81,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 81,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 82,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 82,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 82,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 83,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 83,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 83,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 84,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 84,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 84,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 85,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 85,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 86,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 86,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 86,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 87,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 87,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 88,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 88,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 89,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 89,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 89,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 89,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 90,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 90,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 91,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 91,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 91,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 92,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 92,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 93,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 94,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 94,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 94,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 94,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 95,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 96,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 97,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 97,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 98,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 98,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 99,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 99,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 99,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 100,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 100,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 100,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 100,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 101,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 101,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 101,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 102,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 102,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 103,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 103,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 103,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 104,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 104,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 104,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 105,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 105,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 105,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 105,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 106,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 106,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 107,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 107,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 107,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 107,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 108,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 108,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 109,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 109,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 109,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 109,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 110,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 110,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 111,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 111,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 111,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 112,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 112,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 113,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 113,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 114,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 114,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 115,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 115,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 115,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 115,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 116,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 116,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 116,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 117,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 117,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 117,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 117,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 118,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 119,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 119,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 119,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 120,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 120,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 121,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 121,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 121,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 121,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 122,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 123,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 123,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 123,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 124,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 124,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 124,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 125,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 125,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 126,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 126,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 127,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 127,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 128,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 128,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 128,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 128,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 129,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 129,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 129,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 129,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 130,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 131,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 131,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 132,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 132,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 132,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 132,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 133,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 134,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 134,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 134,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 134,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 135,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 135,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 135,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 136,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 136,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 136,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 136,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 137,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 137,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 137,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 137,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 138,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 138,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 139,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 140,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 140,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 140,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 140,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 141,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 141,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 141,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 142,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 142,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 142,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 143,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 143,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 144,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 144,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 144,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 145,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 145,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 146,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 146,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 146,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 146,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 147,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 147,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 148,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 148,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 148,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 148,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 149,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 149,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 149,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 149,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 150,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 150,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 150,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 150,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 151,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 151,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 152,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 153,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 153,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 153,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 154,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 154,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 155,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 155,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 156,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 156,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 156,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 156,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 157,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 157,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 157,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 157,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 158,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 159,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 160,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 160,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 160,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 161,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 162,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 162,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 162,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 162,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 163,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 163,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 163,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 163,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 164,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 164,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 165,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 165,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 165,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 165,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 166,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 166,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 166,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 167,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 167,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 167,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 168,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 168,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 168,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 168,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 169,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 169,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 169,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 170,
    "product_id": 4,
    "quantity": 2,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 171,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 172,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 172,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 172,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 173,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 174,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 174,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 174,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 174,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 175,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 175,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 175,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 175,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 176,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 177,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 177,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 177,
    "product_id": 8,
    "quantity": 1,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 177,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 178,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 178,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 178,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 179,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 179,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 179,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 180,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 181,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 181,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 181,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 181,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 182,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 182,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 182,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 182,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 183,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 183,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 183,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 184,
    "product_id": 1,
    "quantity": 2,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 184,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 185,
    "product_id": 6,
    "quantity": 2,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 185,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 185,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 186,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 186,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 187,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 188,
    "product_id": 2,
    "quantity": 1,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 188,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 188,
    "product_id": 3,
    "quantity": 3,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 188,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 189,
    "product_id": 4,
    "quantity": 1,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 190,
    "product_id": 7,
    "quantity": 2,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 190,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 190,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 191,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 191,
    "product_id": 8,
    "quantity": 3,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 192,
    "product_id": 7,
    "quantity": 1,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 193,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 193,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 194,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 194,
    "product_id": 5,
    "quantity": 1,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 194,
    "product_id": 6,
    "quantity": 1,
    "price_per_unit": 7000.0
  },
  {
    "order_id": 194,
    "product_id": 1,
    "quantity": 3,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 195,
    "product_id": 2,
    "quantity": 3,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 195,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 195,
    "product_id": 4,
    "quantity": 3,
    "price_per_unit": 12000.0
  },
  {
    "order_id": 196,
    "product_id": 7,
    "quantity": 3,
    "price_per_unit": 40000.0
  },
  {
    "order_id": 196,
    "product_id": 8,
    "quantity": 2,
    "price_per_unit": 3000.0
  },
  {
    "order_id": 197,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 198,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 198,
    "product_id": 5,
    "quantity": 3,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 198,
    "product_id": 3,
    "quantity": 2,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 199,
    "product_id": 3,
    "quantity": 1,
    "price_per_unit": 8000.0
  },
  {
    "order_id": 199,
    "product_id": 1,
    "quantity": 1,
    "price_per_unit": 15000.0
  },
  {
    "order_id": 200,
    "product_id": 5,
    "quantity": 2,
    "price_per_unit": 5000.0
  },
  {
    "order_id": 200,
    "product_id": 2,
    "quantity": 2,
    "price_per_unit": 60000.0
  },
  {
    "order_id": 200,
    "product_id": 6,
    "quantity": 3,
    "price_per_unit": 7000.0
  }
]
};
