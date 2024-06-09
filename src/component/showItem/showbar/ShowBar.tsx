import Balance from "../balance/Balance"
import TopupButton from "../topupbutton/TopupButton"
import WithdrawButton from "../withdrawbutton/WithdrawButton"
import Table from "../table/Table"
import "./ShowBar.css"

const ShowBar = () => {

    return (
        <div className="dashboard">
            <div className="showInfo">
                <Balance></Balance>
                <div className="actions-card">
                    <TopupButton></TopupButton>
                    <WithdrawButton></WithdrawButton>
                </div>
            </div>
            <div>
                <Table></Table>
            </div>
        </div>
    )
}

export default ShowBar