import React, {PropTypes,Component} from 'react';
import { Button, Row,Col, Form, Input,Icon,Checkbox} from 'antd';
import A from '../assets/imgValidator/A.png';
import B from '../assets/imgValidator/B.png';
import C from '../assets/imgValidator/C.png';
import D from '../assets/imgValidator/D.png';
import E from '../assets/imgValidator/E.png';
import F from '../assets/imgValidator/F.png';
import G from '../assets/imgValidator/G.png';
import H from '../assets/imgValidator/H.png';
import I from '../assets/imgValidator/I.png';
import J from '../assets/imgValidator/J.png';
import K from '../assets/imgValidator/K.png';
import L from '../assets/imgValidator/L.png';
import M from '../assets/imgValidator/M.png';
import N from '../assets/imgValidator/N.png';
import O from '../assets/imgValidator/O.png';
import P from '../assets/imgValidator/P.png';
import Q from '../assets/imgValidator/Q.png';
import R from '../assets/imgValidator/R.png';
import S from '../assets/imgValidator/S.png';
import T from '../assets/imgValidator/T.png';
import U from '../assets/imgValidator/U.png';
import V from '../assets/imgValidator/V.png';
import W from '../assets/imgValidator/W.png';
import X from '../assets/imgValidator/X.png';
import Y from '../assets/imgValidator/Y.png';
import Z from '../assets/imgValidator/Z.png';
import a from '../assets/imgValidator/lowerCase/A.png';
import b from '../assets/imgValidator/lowerCase/B.png';
import c from '../assets/imgValidator/lowerCase/C.png';
import d from '../assets/imgValidator/lowerCase/D.png';
import e from '../assets/imgValidator/lowerCase/E.png';
import f from '../assets/imgValidator/lowerCase/F.png';
import g from '../assets/imgValidator/lowerCase/G.png';
import h from '../assets/imgValidator/lowerCase/H.png';
import i from '../assets/imgValidator/lowerCase/I.png';
import j from '../assets/imgValidator/lowerCase/J.png';
import k from '../assets/imgValidator/lowerCase/K.png';
import l from '../assets/imgValidator/lowerCase/L.png';
import m from '../assets/imgValidator/lowerCase/M.png';
import n from '../assets/imgValidator/lowerCase/N.png';
import o from '../assets/imgValidator/lowerCase/O.png';
import p from '../assets/imgValidator/lowerCase/P.png';
import q from '../assets/imgValidator/lowerCase/Q.png';
import r from '../assets/imgValidator/lowerCase/R.png';
import s from '../assets/imgValidator/lowerCase/S.png';
import t from '../assets/imgValidator/lowerCase/T.png';
import u from '../assets/imgValidator/lowerCase/U.png';
import v from '../assets/imgValidator/lowerCase/V.png';
import w from '../assets/imgValidator/lowerCase/W.png';
import x from '../assets/imgValidator/lowerCase/X.png';
import y from '../assets/imgValidator/lowerCase/Y.png';
import z from '../assets/imgValidator/lowerCase/Z.png';

const urlMap = new Map([
    ['A',A],
    ['B',B],
    ['C',C],
    ['D',D],
    ['E',E],
    ['F',F],
    ['G',G],
    ['H',H],
    ['I',I],
    ['J',J],
    ['K',K],
    ['L',L],
    ['M',M],
    ['N',N],
    ['O',O],
    ['P',P],
    ['Q',Q],
    ['R',R],
    ['S',S],
    ['T',T],
    ['U',U],
    ['V',V],
    ['W',W],
    ['X',X],
    ['Y',Y],
    ['Z',Z],
    ['a',a],
    ['b',b],
    ['c',c],
    ['d',d],
    ['e',e],
    ['f',f],
    ['g',g],
    ['h',h],
    ['i',i],
    ['j',j],
    ['k',k],
    ['l',l],
    ['m',m],
    ['n',n],
    ['o',o],
    ['p',p],
    ['q',q],
    ['r',r],
    ['s',s],
    ['t',t],
    ['u',u],
    ['v',v],
    ['w',w],
    ['x',x],
    ['y',y],
    ['z',z],
]);
class ImgVerifyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  componentWillUnmount() {
  }

  handleOk = () => {
    const { onOk } = this.props;
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }

  render(){
    const { list } = this.props;
    return (
        <div onClick={this.props.onClickValidtor}
        style={{width:'95px',height:'25px',marginLeft:'-15px'}}>
            <Row gutter={24} style={{width:'100px',height:'25px',margin:'0px'}}>
                <Col span={6} style={{width:'23px',height:'23px',margin:'0px'}}>
                    <img style={{width:'23px',height:'23px',marginLeft:'-5px'}} src={urlMap.get(list[0])}/>
                </Col>
                <Col span={6} style={{width:'23px',height:'23px',margin:'0px'}}>
                    <img style={{width:'23px',height:'23px',marginLeft:'-5px'}} src={urlMap.get(list[1])}/>
                </Col>
                <Col span={6} style={{width:'23px',height:'23px',margin:'0px'}}>
                    <img style={{width:'23px',height:'23px',marginLeft:'-5px'}} src={urlMap.get(list[2])}/>
                </Col>
                <Col span={6} style={{width:'23px',height:'23px',margin:'0px'}}>
                    <img style={{width:'23px',height:'23px',marginLeft:'-5px',marginRight:'2px'}} src={urlMap.get(list[3])}/>
                </Col>
            </Row>
        </div>);
  }
}

ImgVerifyCode.propTypes = {

};
export default ImgVerifyCode;
