import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import Counter from "./Countdown";
import {Dispatch, State} from "../redux/store";
import { updateTextAction} from "../redux/actions";
import Settings from "./Settings";
import styles from './Dashboard.module.css';

class Dashboard extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            time: e.target.value
        });
    };

    render() {
        return (
            <div className={styles.container}>
                {/*<input onChange={(e) => this.handleOnChange(e)}/>*/}
                {/*<button onClick={(e) => this.props.updateText(this.state.time)}/>*/}
                <Counter />
                <Settings />
            </div>
        );
    }
}


const mapStateToProps = (state: State) => ({
    // text: state.form.text,
    // foo: state.form.foo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateText: (text: string) => dispatch(updateTextAction(text)),
    dispatch
});
// const mapDispatchToProps = (dispatch) => ({
//     handleClick: () => dispatch(alertActions.clear()),
//     dispatch, //returning dispatch solves the issue
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// const mapStateToProps = (state: State)  => ({});

// const mapDispatchToProps = (dispatch: Dispatch) => ({});


// function mapDispatchToProps(dispatch) {
//     return({
//         sendTheAlert: () => {dispatch(ALERT_ACTION)}
//     })
// }
//
// function mapStateToProps(state) {
//     return({fancyInfo: "Fancy this:" + state.currentFunnyString})
// }
//
// export const FancyButtonContainer = connect(
//     mapStateToProps, mapDispatchToProps)(
//     FancyAlerter
// )
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
