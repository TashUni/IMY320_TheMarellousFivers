import Announcement from "../Announcement/Announcement";
import style from './feed.module.scss';
import colors from "../colors";

const data = [
    {
        module: "IMY320",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Practical Postponed",
        profilePhoto: "assets/images/profile.png",
        color: colors["IMY320"].normal,
        isWhite: colors["IMY320"].whiteText,
    },
    {
        module: "COS333",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Class Test",
        profilePhoto: "assets/images/profile.png",
        color: colors["COS333"].normal,
        isWhite: colors["COS333"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Attendance is shocking!",
        profilePhoto: "assets/images/profile.png",
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "You haven't seen the last of me!",
        profilePhoto: "assets/images/profile.png",
        color: colors["WTW164"].normal,
        isWhite: colors["WTW164"].whiteText
    },
    {
        module: "WTW164",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a vulputate urna. Nam sit amet nisi vitae ligula pulvinar porttitor. Vestibulum vitae magna et ipsum scelerisque ultricies quis vitae justo. Donec ut ultricies purus. Morbi eget ligula tortor. Cras pulvinar lobortis libero non ullamcorper. Donec quis urna nec mi eleifend tincidunt. Nam id dictum elit.",
        heading: "Attendance is shocking!",
        profilePhoto: "assets/images/profile.png",
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
            <h2 className={style.Heading}>At a glance</h2>
            <div className={style.ModuleContainer}>
                {getAnnouncements()}
            </div>

        </div>
    )
}

export default Feed;