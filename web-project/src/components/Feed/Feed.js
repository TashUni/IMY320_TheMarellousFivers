import Announcement from "../Announcement/Announcement";
import style from './feed.module.scss';
import colors from "../colors";

import profile1 from './images/profile-1.jpeg';
import profile2 from './images/profile-2.jpeg';
import profile3 from './images/profile-3.jpeg';

const data = [
    {
        module: "IMY320",
        content: "Welcome to IMY320! We are thrilled to embark on this mathematical journey together. In this course, you will explore the fascinating world of mathematics, tackling topics ranging from algebra to calculus and beyond. Get ready to expand your problem-solving skills, enhance your logical thinking, and discover the beauty of mathematical concepts. We look forward to an exciting and enriching learning experience with all of you.",
        heading: "Practical Postponed",
        profilePhoto: profile1,
        color: colors["IMY320"].normal,
        isWhite: colors["IMY320"].whiteText,
    },
    {
        module: "COS333",
        content: "Dear Students,\n" +
            "\n" +
            "We have an exciting event coming up in our math course! We are delighted to announce a guest lecture by Sarah May, a renowned mathematician in the field of [specific field of mathematics]. The lecture, titled \"[Lecture Title],\" will take place on [Date] at [Time] in [Location/Online Platform]. This is a fantastic opportunity to gain insights from an expert in the field and expand your understanding of mathematics. We encourage all of you to attend and make the most of this unique learning experience.",
        heading: "Guest Lecturer",
        profilePhoto: profile2,
        color: colors["COS333"].normal,
        isWhite: colors["COS333"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Attendance is shocking!",
        profilePhoto: profile3,
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "You haven't seen the last of me!",
        profilePhoto: profile3,
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Attendance is shocking!",
        profilePhoto: profile3,
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText
    }
];

function Feed() {

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
                />
            ))

        return result;
    }

    return(
        <div className={style.Container}>
            <h2 className={style.Heading}>Your Feed.</h2>
            <div className={style.ModuleContainer}>
                {getAnnouncements()}
            </div>

        </div>
    )
}

export default Feed;