import React from 'react';
import Countdown, {CountdownApi, zeroPad} from 'react-countdown';
import {connect} from "react-redux";
import styles from './Countdown.module.css';
import { Dispatch, State } from "../redux/store";
import {
    ReloadOutlined,
    PauseOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import {resetApplication} from "../redux/actions";

type CountdownProps = {
    minutes: number,
    seconds: number,
    completed: boolean
}

class Counter extends React.Component<any, any>  {
    constructor(props) {
        super(props);
        this.state = {
            initializeTime: Date.now() + (10 * 1000),
            restTime: Date.now() + this.props.restTime * 1000,
            exerciseTime: Date.now() + this.props.exerciseTime * 1000,
            isInitialized: false,
            isComplete: false,
            isRestTime: false,
            isExerciseTime: false,
            date: Date.now() + this.props.restTime * 1000
        };
    }
    countdownApi: CountdownApi | null = null;
    // state = { date: Date.now() + this.props.restTime * 1000 };
    renderer = ({ minutes, seconds, completed } : CountdownProps) => {
        if (completed) {
            return <span>You are good to go!</span>;
        } else {
            return (
                <div className={styles.counter}>
                    {zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
                </div>
            );
        }
    };

    handleDebugClick = () => {
        if (this.countdownApi) {
            console.log(this.countdownApi.isCompleted());
            console.log(this.countdownApi.isPaused());
            console.log(this.countdownApi.isStarted());
            console.log(this.countdownApi.isStopped());
        }
    };

    handleStartClick = () => {
        if (this.countdownApi)
            this.countdownApi && this.countdownApi.start();
    };

    handlePauseClick = () => {
        this.countdownApi && this.countdownApi.pause();
    };

    handleResetClick = () => {
        this.setState({ date: Date.now() + this.props.restTime * 1000});
    };

    handleUpdate = () => {
        this.forceUpdate();
    };

    setRef = (countdown: any) => {
        if (countdown) {
            this.countdownApi = countdown.getApi();
        }
    };

    isPaused() {
        return !!(this.countdownApi && this.countdownApi.isPaused());
    }

    isCompleted() {
        return !!(this.countdownApi && this.countdownApi.isCompleted());
    }

    render() {
        return (
            <div className={ styles.container }>
                {/* Initialization Counter */}
                <Countdown
                    key={this.state.initializeTime}
                    ref={this.setRef}
                    date={this.state.initializeTime}
                    onMount={this.handleUpdate}
                    onStart={this.handleUpdate}
                    onPause={this.handleUpdate}
                    onComplete={this.handleUpdate}
                    autoStart={false}
                    renderer={this.renderer}
                />
                {/* Exercise Counter */}
                {this.state.isInitialized &&
                    <Countdown
                        key={this.state.exerciseTime}
                        ref={this.setRef}
                        date={this.state.exerciseTime}
                        onMount={this.handleUpdate}
                        onStart={this.handleUpdate}
                        onPause={this.handleUpdate}
                        onComplete={this.handleUpdate}
                        autoStart={false}
                        renderer={this.renderer}
                    />
                }
                {/* Rest Counter */}
                {this.state.isInitialized &&
                    <Countdown
                        key={this.state.restTime}
                        ref={this.setRef}
                        date={this.state.restTime}
                        onMount={this.handleUpdate}
                        onStart={this.handleUpdate}
                        onPause={this.handleUpdate}
                        onComplete={this.handleUpdate}
                        autoStart={false}
                        renderer={this.renderer}
                    />
                }
                <div className={ styles.buttonRow }>
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={this.handleDebugClick}*/}
                    {/*>*/}
                    {/*    DEBUG*/}
                    {/*</button>{' '}*/}
                    <button
                        className={ styles.button }
                        type="button"
                        onClick={this.handleStartClick}
                        disabled={!this.isPaused() || this.isCompleted()}
                    >
                        <CaretRightOutlined />
                    </button>
                    <button
                        className={ styles.button }
                        type="button"
                        onClick={this.handlePauseClick}
                        disabled={this.isPaused() || this.isCompleted()}
                    >
                        <PauseOutlined />
                    </button>
                    <button
                        type="button"
                        className={ styles.button }
                        onClick={() => this.props.reset()}
                    >
                        <ReloadOutlined />
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    status: state.form.status,
    restTime: state.form.restTime,
    exerciseTime: state.form.exerciseTime,
    sets: state.form.sets,
    reps: state.form.reps,
    text: state.form.text,
    foo: state.form.foo
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
    reset: () => dispatch(resetApplication()),
    dispatch
    // updatedText: (text: string) => {
    //     return dispatch(updateTextAction(text));
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
