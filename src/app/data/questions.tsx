import { Question } from "../interfaces/question";

export const questions: Question[] = [
    {
        id: '01',
        text: 'It\'s a nice sunny morning, you wake up, yawn, roll over, and notice an envelope on your nightstand.',
        image: './image/slide_1.png',
        options: {
            'A letter? I wonder what it is. You open it with excitement ': 'E',
            'Hmm.. I wonder what this could be... You open it with caution': "I"
        }
    },
    {
        id: '02',
        text: 'Before you can open the envelope, it flips around and says “I\'ve been waiting to meet you, hero.',
        image: './image/slide_2.png',
        options: {
            'I don\'t care if this is a dream or not I\'m soooo ready for this.': 'N',
            'Is this real? What is even going on??': "S"
        }
    },
    {
        id: '03',
        text: 'What are you waiting for hero? Are you ready to join us?',
        image: './image/slide_3.png',
        options: {
            'Hold on, I have to go to work, feed the cat, brush my teeth…': 'T',
            'I have to tell my mom and my friends, wait…': "F"
        }
    },
    {
        id: '',
        text: '',
        image: '',
        options: {
            '': ''
        },
    },
    {
        id: '04',
        text: 'The envelope grabs your hand and brings you through a portal.',
        image: './image/slide_4.png',
        options: {
            'OMG, Where am I going? How is this even possible? I\'m gonna get a headache from this.': 'J',
            'No way! This is so cool!': "P"
        }
    },
    {
        id: '05',
        text: 'You walk towards them and notice they are humanoid cats! They notice you and approach you asking if you need a guide. You agree and you choose:',
        image: './image/screen_6.png',
        options: {
            'A chatty & friendly cat named Haru.': 'E',
            'A silent and honest cat named Boo.': "I"
        }
    },
    {
        id: '06',
        text: 'As your guide is taking you around the town, you realize the city is pretty far. What transportation do you choose?',
        image: './image/slide_7.png',
        options: {
            'A unicorn, I don\'t know how to ride one yet, but it looks fun and I\'m sure I can figure it out.': 'N',
            'The car, I know how to drive one and I can get to the city ASAP': "S"
        }
    },
    {
        id: '07',
        text: 'You reach your destination and you see a garden and a castle, which one do you choose?',
        image: './image/slide_8.png',
        options: {
            'The castle duh! I need to figure out what all this is about.': 'T',
            'The garden, I wanna meet new friends and explore the beautiful land': "F"
        }
    },
    {
        id: '08',
        text: 'After choosing, you look around a bit and end up seeing a troll. What do you do?',
        image: './image/slide_9.png',
        options: {
            'Approach him and demand him to tell you where to go': 'J',
            'Kindly ask him where you should be headed and take your time chatting with him.': "P"
        }
    },
    {
        id: '09',
        text: 'The troll tells you that you must enter through a cave to find what you are looking for.',
        image: './image/slide_10.png',
        options: {
            'I can\'t wait to see what\'s waiting there for me, perhaps a magic sword?': 'E',
            'A cave? Is there no other way?': "I"
        }
    },
    {
        id: '10',
        text: 'You start going down the cave and see a sleeping bear, with what seems to be a glowing scroll, what do you do?',
        image: './image/slide_11.png',
        options: {
            'Take the scroll as quietly as I can and book it.': 'S',
            'Take some time to figure out the best possible solution to take the scroll without getting hurt': "N"
        }
    },

    {
        id: '11',
        text: 'Before you make your move, the bear wakes up and growls at your presence. What are you doing?',
        image: './image/slide_12.png',
        options: {
            'Running and fighting': 'T',
            'The bear is kind of cute, I will try my best to reason with it.': "F"
        }
    },
    {
        id: '',
        text: '',
        image: '',
        options: {
            '': ''
        },
    },

    {
        id: '12',
        text: 'You wake up in your bed. You look around and see that the envelope is in your hand.',
        image: './image/slide_14.png',
        options: {
            'That had to be a dream right? I\'m glad I\'m out of it.': 'J',
            'OMG, I\'m glad I\'m back, I wonder what the envelope says…': "P"
        }
    }
];