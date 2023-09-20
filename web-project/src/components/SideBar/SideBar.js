import './SideBar.css'

function SideBar(props) {
    return <div className={"container"}>

        <h1>Click<span>UP</span></h1>
        <nav className={"topNav"}>
            <div className={"active"}>DashBoard</div>
            <div>Stream</div>
            <div>Calender</div>
            <div>Grades</div>
        </nav>
        <hr/>
        <nav className={"bottomNav"}>
            <div id={"recent"}>Recent</div>
            <div>COS301</div>
            <div>WTW238</div>
            <div>IMY300</div>
        </nav>
        <nav className={"bottomNav larger"}>
            <hr/>
            <div>Settings</div>
            <div>Logout</div>
        </nav>


    </div>;
}


export default SideBar;