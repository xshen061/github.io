let courseList = [

    {
        id:0,
        title:'Introduction to html',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thumbnail: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'This is a great course for beginners to start diving in to the modern web!',
        difficulty:'beginner',
        author:'John Doe',
        languages: "Html CSS Javascript",
        units:["Elements","CSS", "Semantics", "Accessibility"],
        price:"$12.00"
    },
    {
        id:1,
        title:'Javascript Mastery',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thumbnail: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Master Javascript in just 2 weeks! Simple easy instructions cover everything from the basics to the nerdy details',
        difficulty:'intermediate',
        author:'Anna Smith',
        languages: "Html CSS Javascript",
        units:["Elements","CSS", "Semantics", "Accessibility"],
        price:"$15.00"
    },
    {
        id:2,
        title:'Frontend Crash Course',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        thumbnail: 'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Design, develop deploy. Essential skills to get you shipping projects in no time',
        difficulty:'beginner',
        author:'April Summers',
        languages: "HTML CSS Javascript React",
        units:["HTML","CSS", "Javascript", "React", "Adobe XD", "Portfolio"],
        price:"$18.00"
    },
    {
        id:3,
        title:'C++ Fundamentals',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/1157455/pexels-photo-1157455.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        thumbnail: 'https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Master Javascript in just 2 weeks! Simple easy instructions cover everything from the basics to the nerdy details',
        difficulty:'beginner',
        author:'Jack Park',
        languages: "C C++",
        units:["Syntax","Interprocess communication", "Memory Mangement", "Threads", "Tic Tac Toe"],
        price:"$16.00"
    },
    {
        id:4,
        title:'Node and Express simplified',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        thumbnail: 'https://images.pexels.com/photos/839465/pexels-photo-839465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Develop perfomant scalable backends using just Node and Express. Production quality code examples, simple to the point instruction and tons of hands on exercises!',
        difficulty:'intermediate',
        author:'Jake Sanders',
        languages: "Javascript Node Express",
        units:["Express fundamentals", "Perfomance optimization", "Third party integration"],
        price:"$19.00"
    },

    {
        id:5,
        title:'Android Studio Best Practices',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Industry tested and certified battle tested. This course introduces you to essential best practices used by veterans throughout the industry.',
        difficulty:'advanced',
        author:'Jake Sanders',
        languages: "Java Kotlin",
        units:["Java vs Kotlin","Legacy Support","Update Propogation"],
        price:"$24.00"
    },

    {
        id:6,
        title:'Machine Learning in Data Science',
        datePublished: new Date().toLocaleDateString(),
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        thumbnail: 'https://images.pexels.com/photos/241544/pexels-photo-241544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Machine learning models to give you the edge in advanced statistcal analysis. Not for the faint of heart but easier than you might think!',
        difficulty:'advanced',
        author:'Sandra Keys',
        languages: "Python Go",
        units:["Machine Learning Models","Python or Go","Obtaining statistically significant data"],
        price:"$11.00"
    },


];

export default courseList;