module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    jsonData = {
        "basics": {
          "name": "Ayush Kumar",
          "label": "Software Engineer",
          "image": "https://dashing-cheesecake-3d9b5d.netlify.app/",
          "email": "ayushkumargoley@gmail.com",
          "phone": "+91-8493281958",
          "url": "www.linkedin.com/in/ayushgoley",
          "summary": "A Software Engineer learning and growing..",
          "location": {
            "city": "Delhi",
            "countryCode": "India",
            "region": "Delhi"
          },
          "profiles": [{
            "network": "Linkdin",
            "username": "Ayush Goley",
            "url": "www.linkedin.com/in/ayushgoley"
          }]
        },
        "work": [{
          "name": "Coforge",
          "position": "Software Engineer",
          "url": "https://www.coforge.com/",
          "startDate": "18-01-2022",
          "endDate": "Present",
          "summary": "Software Development Engineer July 2022–Present Appointed as a software developer in Airlines domain working for IAG Cargo Airlines British Airways services and reporting to UK based client and handling requests, Maintaining client application, Worked on tools and tech Java, Server side frameworks, Tomcat, Linux/Unix scripting, J2EE, Oracle VB, JavaScript, Angular, Spring, Hibernate.",
          "highlights": [
            "IAG Cargo Domain"
          ]
        }],
        "education": [{
          "institution": "Noida Institute of Engineering and Technology",
          "url": "https://www.niet.co.in/",
          "area": "Electronics and Communications",
          "studyType": "Bachelor",
          "startDate": "01-06-2018",
          "endDate": "01-06-2022",
          "score": "8.04 CGPA",
        }],
        "certificates": [{
            "name": "Azure AZ 900",
            "date": "03-07-2022",
            "issuer": "Microsoft",
            "url": "https://1drv.ms/b/s!AmOe3A49Knnjj1xquxVJLT7XkRmg",

            "name": "Azure AI 900",
            "date": "25-02-2022",
            "issuer": "Microsoft",
            "url": "https://1drv.ms/b/s!AmOe3A49Knnjj1p9md1ohLibLZad",

            "name": "Azure DP 900",
            "date": "17-07-2022",
            "issuer": "Microsoft",
            "url": "https://1drv.ms/b/s!AmOe3A49Knnjj1vudh-w4Oi_Zflo"
        }],
        "Conference Presentation": [{
          "name": "Advance Research Trends in Engineering",
          "publisher": "NCARTE-2022",
          "releaseDate": "26-03-2022",
          "summary": "SRMS organized the conference and our team presented the project",
          "Project URL": "https://1drv.ms/u/s!AmOe3A49KnnjjTwNhYo2mn78KoHi?e=4FTAOh"
        }],
        "skills": [{
          "name": "Web Development",
          "level": "Master",
          "keywords": [
            "HTML",
            "CSS",
            "JavaScript"
          ]
        }],
        "languages": [{
            "language": "English",
            "fluency": "Professional efficiency",
            "language": "Hindi",
            "fluency": "Native"
        }],
        "interests": [{
          "name": "Wildlife",
          "keywords": [
            "Ferrets",
            "Unicorns"
          ]
        }],
      }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(jsonData, null, 2)
    };
}
