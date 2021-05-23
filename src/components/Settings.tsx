import React from "react";
import {connect} from "react-redux";
import {Dispatch, State} from "../redux/store";
import {updateExerciseTime, updateReps, updateSets, updateTextAction} from "../redux/actions";
import {Slider} from "antd";
import styles from './Settings.module.css';
import 'antd/dist/antd.css';

class Settings extends React.Component<any, any> {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    getExerciseMinutes() {
        return Math.trunc(this.props.exerciseTime / 60)
    }

    getExerciseSeconds() {
        return this.props.exerciseTime % 60;
    }

    handleExerciseMinutes = minutes => {
        this.props.updateExerciseTime(minutes * 60 + this.getExerciseSeconds())
    };

    handleExerciseSeconds = seconds => {
        this.props.updateExerciseTime(this.getExerciseMinutes() * 60 + seconds)
    };

    getRestMinutes() {
        return Math.trunc(this.props.restTime / 60)
    }

    getRestSeconds() {
        return this.props.restTime % 60;
    }

    handleRestMinutes = minutes => {
        this.props.updateRestTime(minutes * 60 + this.getRestSeconds())
    };

    handleRestSeconds = seconds => {
        this.props.updateRestTime(this.getRestMinutes() * 60 + seconds)
    };

    render() {
        // const { disabled } = this.state;
        return (
            <div>
                <div className={ styles.sliderContainer }>
                    <div className={ styles.labelContainer }>
                        <div>Sets</div>
                        <div>{this.props.sets}</div>
                    </div>
                    <Slider defaultValue={this.props.sets}
                            min={0}
                            max={20}
                            onAfterChange={(value) => this.props.updateSetsValue(value)}
                    />
                </div>
                <div className={ styles.sliderContainer }>
                    <div className={ styles.labelContainer }>
                        <div>Reps</div>
                        <div>{this.props.reps}</div>
                    </div>
                    <Slider defaultValue={this.props.reps}
                            max={25}
                            min={0}
                            onAfterChange={(value) => this.props.updateRepsValue(value)}
                    />
                </div>
                <div className={ styles.sliderContainer }>
                    <div className={ styles.labelContainer }>
                        <div>Exercise Duration</div>
                        <div>{this.getExerciseMinutes()}:{this.getExerciseSeconds()}</div>
                    </div>
                    <Slider defaultValue={this.getExerciseMinutes()}
                            min={0}
                            max={10}
                            onAfterChange={this.handleExerciseMinutes}
                    />
                    <Slider defaultValue={this.getExerciseSeconds()}
                            min={0}
                            max={60}
                            onAfterChange={this.handleExerciseSeconds}
                    />
                </div>
                <div className={ styles.sliderContainer }>
                    <div className={ styles.labelContainer }>
                        <div>Rest Duration</div>
                        <div>{this.getRestMinutes()}:{this.getRestSeconds()}</div>
                    </div>
                    <Slider defaultValue={this.getRestMinutes()}
                            min={0}
                            max={10}
                            onAfterChange={this.handleRestMinutes}
                    />
                    <Slider defaultValue={this.getRestSeconds()}
                            min={0}
                            max={60}
                            onAfterChange={this.handleRestSeconds}
                    />
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
    updateText: (text: string) => dispatch(updateTextAction(text)),
    updateSetsValue: (value: number) => dispatch(updateSets(value)),
    updateRepsValue: (value: number) => dispatch(updateReps(value)),
    updateExerciseTime: (value: number) => dispatch(updateExerciseTime(value)),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
