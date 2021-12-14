var defaultThreads = [
    {
        id: 1,
        title: "Our Recent Music",
        author: "Evans",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there any new music?"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too i havent heard of one."
            }
        ]
    },
    {
        id: 2,
        title: "Latest Music",
        author: "Evans",
        date: Date.now(),
        content: "Latest Music",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}