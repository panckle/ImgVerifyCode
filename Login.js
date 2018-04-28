import React, {PropTypes,Component} from 'react';
import { Button, Row,Col, Form, Input,Icon,Checkbox} from 'antd';
import styles from './Login.less';
import topimg from '../assets/login/logo.png';
import ImgValidator from './ImgValidator';


class Login extends Component {
  submitting = false; //是否在提交，用于校验验证码，仅在提交的时候校验验证码
  verifyCodeInput = undefined; // 保存验证码输入框的ref
  constructor(props) {
    super(props);
    
    this.state = {
      validateCode:this.generateValidateCode(),
    };
  };

  componentDidMount(){
  };

  componentWillUnmount() {
  };

  handleOk = () => {
    const thisPointer = this;
    const { onOk } = this.props;
    const {
      validateFieldsAndScroll,
      getFieldsValue,
      setFieldsValue,
      validateFields
    } = this.props.form;
    this.submitting = true;
    //Function([fieldNames: string[]], options: object, callback: Function(errors, values))
    validateFieldsAndScroll(['verifyCode'],{force:true},(errors, values)=>{
      if (errors) {
        thisPointer.handelClickValidator();
        console.log(thisPointer.verifyCodeInput);
        const input = thisPointer.verifyCodeInput.input;
        input.focus();
        input.setSelectionRange(0, input.value.length);
        thisPointer.submitting = false;
        return
      }
    });
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        thisPointer.submitting = false;
        thisPointer.handelClickValidator();
        return
      }
      onOk(values)
    })
    this.submitting = false;
  };
  // 生成随机验证码
  generateValidateCode(){
    const validateCode = new Array();
    for(let i=0;i<4;i++){
      if(Math.random()>0.5){
        validateCode.push(String.fromCharCode(65+Math.round(Math.random()*25)));
      }else{
        validateCode.push(String.fromCharCode(97+Math.round(Math.random()*25)));
      }
    }
    return validateCode;
  };
  // 点击切换验证码
  handelClickValidator(){
    this.setState({
      validateCode:this.generateValidateCode(),
    });
  };
  // 校验验证码
  validateValidateCode(rule, value, callback){
    console.log(this.submitting);
    if(!value){
      return callback();
    }
    if(!this.submitting){
      return callback();
    }else{
      const validateCode= this.state.validateCode.join('');
      if(value.toUpperCase()===validateCode.toUpperCase()){
        console.log('检验验证码通过！');
        return callback();
      }else{
        return callback('验证码不正确！');
      }
    }
  };
  render(){
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{"height":"100vh","width":"100vw"}}>
        <div className={styles.lgnmain}>
          <div className={styles.logcon} >
            <div className={styles.left} />
            <div className={styles.logtb}>
              <h1 >{/* <img  className={styles.logintip} src={logintip} /> */}用户登录</h1>
              <form >
                <FormItem hasFeedback>
                  {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ],
              })(<Input addonBefore={<Icon type="user" style={{ fontSize: 16,color: "#ccc"}} />} onPressEnter={this.handleOk} placeholder='请输入账号' />)}
                </FormItem>
                <FormItem hasFeedback>
                  {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请填写密码',
                  },
                ],
              })(<Input addonBefore={<Icon type="lock" style={{ fontSize: 16,color: "#ccc" }} />} type='password' onPressEnter={this.handleOk} placeholder='请输入密码' />)}
                </FormItem>
                <FormItem >
                  {getFieldDecorator('verifyCode', {
                rules: [
                  {
                    required: true,
                    message: '请填写验证码',
                  },
                  {
                    validator:this.validateValidateCode.bind(this),
                  }
                ],
              })(<Input
                ref={c => this.verifyCodeInput = c}
                addonBefore={<Icon type="safety" style={{ fontSize: 16,color: "#ccc" }} />}
                type='text'
                onPressEnter={this.handleOk}
                placeholder='请输入验证码'
                addonAfter={
                  <ImgValidator 
                  onClickValidtor={this.handelClickValidator.bind(this)}
                  list={this.state.validateCode} />
                }
              />)}
                </FormItem>
                <Row>
                  <Button type='primary' style={{width:"100%",marginTop:5,marginBottom:5}} size='large' onClick={this.handleOk} loading={this.props.loginButtonLoading}>
                登录
                  </Button>
                </Row>
                <Row>
                  {this.props.errMessages && (
                  <p className={styles.errmsg}>
                    <Icon type="close-circle" /> {this.props.errMessages}
                  </p>
)}
                </Row>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func,
  showForgetModal:PropTypes.func,
};

export default Form.create()(Login);
