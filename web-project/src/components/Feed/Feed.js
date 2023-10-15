import Announcement from "../Announcement/Announcement";
import style from './feed.module.scss';
import colors from "../colors";

import profile1 from './images/profile-1.jpeg';
import profile2 from './images/profile-2.jpeg';
import profile3 from './images/profile-3.jpeg';

const data = [
    {
        module: "IMY320",
        content:
            [
                "Welcome to IMY320!",
                "We are thrilled to embark on this mathematical journey together.",
                "In this course, you will explore the fascinating world of mathematics, tackling topics ranging from algebra to calculus and beyond.",
                "Get ready to expand your problem-solving skills, enhance your logical thinking, and discover the beauty of mathematical concepts.",
                "We look forward to an exciting and enriching learning experience with all of you."
            ],
        heading: "Welcome, my minions!",
        profilePhoto: profile1,
        color: colors["IMY320"].normal,
        isWhite: colors["IMY320"].whiteText,
        images: ["imgAnn1.jpeg", "imgAnn2.jpeg"]
    },
    {
        module: "COS333",
        content: [
            "Dear Students",
            "We have an exciting event coming up in our math course! We are delighted to announce a guest lecture by Sarah May, a renowned mathematician in the field of Statistics.",
            "The lecture, titled \"Oh for the love of Maths,\" will take place on 24 May at 15:00 in the RautenBach hall. This is a fantastic opportunity to gain insights from an expert in the field and expand your understanding of mathematics.",
            "We encourage all of you to attend and make the most of this unique learning experience."
        ],
        heading: "Guest Lecturer",
        profilePhoto: profile2,
        color: colors["COS333"].normal,
        isWhite: colors["COS333"].whiteText, images: []
    },
    {
        module: "WTW164",
        content: [
            "Oh, you thought you could breathe a sigh of relief, didn’t you? You thought you could just slide by, attending class when it suits you, ignoring my warnings, and that there would be no consequences.",
            "Well, buckle up, because you haven’t seen the last of me.",
            "Let me break some news for you: most of your peers, the ones who actually showed up and gave a damn, they passed the last test. Imagine that! They put in the effort, they listened, they learned, and they conquered.",
            "Now, what about you? Where were you? Probably hitting the snooze button, or maybe you were too busy with your oh-so-important social life to bother with mathematics. Well, your apathy ends now"
        ],
        heading: "You haven't seen the last of me!",
        profilePhoto: profile3,
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText,
        images: ["imgAnn3.jpeg"]
    },
    {
        module: "WTW164",
        content: [
            "Alright, listen up, because clearly, some of you haven't been paying attention. This is your angry lecturer speaking, and I've got something to say about this situation.",
            "I'm flabbergasted, folks. Completely flabbergasted. I stand in front of the class, armed with knowledge, enthusiasm, and a passion for teaching, and what do I get in return? Empty seats! Seriously? Is this some kind of joke?",
            "Let me break it down for you. This math course isn't just another class. It's a golden opportunity, a chance for you to grasp the intricacies of mathematics, to conquer the world of numbers, and what do you do? You skip it. You skip it like it's some optional party you can decide to attend or not.",
            "Well, newsflash: it's not optional."
        ],
        heading: "Attendance is shocking!",
        profilePhoto: profile3,
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText,
        images: ["imgAnn4.jpeg", "imgAnn5.jpeg"]
    }
];

function Feed(props) {

    const getAnnouncements = () => {
        let result = [];

        data.map((obj, index) =>
            result.push(
                <Announcement
                    module={obj.module}
                    content={obj.content}
                    heading={obj.heading}
                    profilePhoto={obj.profilePhoto}
                    color={obj.color}
                    key={index}
                    isWhite={obj.isWhite}
                    images={obj.images}
                />
            ))

        return result;
    }

    return(
            <div className={`${style.Container} fade-in-and-move delay1`}>
                <h2 className={style.Heading}>Your Feed.</h2>
                <div className={style.ModuleContainer}>
                    {getAnnouncements()}
                </div>
            </div>
    )
}

export default Feed;