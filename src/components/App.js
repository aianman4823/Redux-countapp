import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from '../actions';


class App extends Component{

    // //プラスボタンが押された時の処理
    // handlePlusButton=()=>{
    //     this.setState({
    //         count:this.state.count + 1
    //     })
    // }
    // //マイナスボタンが押された時の処理
    // handleMinusButton=()=>{
    //     this.setState({
    //         count:this.state.count - 1
    //     })
    render(){
        const props=this.props; //状態やアクションを渡す。mapStateToPropsで定義されている。関数はmapDispatchTopropsで渡されている。
        return(
            <React.Fragment>
                <div>count :{props.value}</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        );
    }
}

//stateの情報からこのcomponentで必要な物を取り出してcomponentないのpropsとしてマッピング機能
//引数には、状態のトップレベルを示すstateを書いて、どういったオブジェクトをpropsとして対応させるのか、関数の戻り値として定義。
const mapStateToProps =(state) => {
    return{value: state.count.value}
}

//あるアクションが発生した時に、reducerにタイプに応じた状態繊維を実行させるための関数がdispatch。
//このdispatch関数を引数に置くことで、このcomponentで必要になるdispatch関数を宣言する。
const mapDispatchToProps = (dispatch) =>{
    return({
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(App);