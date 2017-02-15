import React, {Component} from 'react';

import IceTitle from '@ali/ice-title';
import {
  BlockRow,
  BlockCol
} from '@ali/ice-layout';

import {
  Form,
  Field,
  Input,
  Button,
} from '@ali/ice';

import Layout from '../../components/Layout/';

const FormItem = Form.Item;

const styles = {
  input: {
    width: 300
  }
};

export default class View extends Component {

  constructor(props) {
    super(props);
    this.field = new Field(this);
    this.field.setValues({
      name: props.name
    });
  }

  render() {
    const init = this.field.init;

    return (
      <Layout>
        <IceTitle
          text="ICE"
          subtitle="企业级泛后台应用解决方案"
          link="http://ice.alibaba-inc.com"
          style={{marginTop: 0, marginBottom: 10}}
        />
        <BlockRow>
          <BlockCol>
            <Form field={this.field}>
              <FormItem
                label="用户名:"
                labelCol={{
                  span: 3
                }}
              >
                <Input
                  {...init('name', {rules: [{
                    required: true,
                    type: 'number',
                    validator: (rule,value,callback) => {
                      if (!/\d+/.test(value)) {
                        callback(false)
                      }
                    },
                    message: '请输入用户名'
                  }]})}
                  style={styles.input}
                />
              </FormItem>
              <FormItem
                label="密码:"
                labelCol={{
                  span: 3
                }}
              >
                <Input
                  {...init('password', {rules: [{
                    required: true,
                    type: 'number',
                    validator: (rule,value,callback) => {
                      if (!/\d+/.test(value)) {
                        callback(false)
                      }
                    },
                    message: '请输入密码'
                  }]})}
                  htmlType="password"
                  style={styles.input}
                />
              </FormItem>
              <FormItem
                label="自我介绍:"
                labelCol={{
                  span: 3
                }}
               >
                <Input
                  style={styles.input}
                  multiple
                  placeholder="一句话介绍你自己"
                  {...init('remark')}
                />
              </FormItem>
              <FormItem
                wrapperCol={{
                  span: 21,
                  offset: 3 }}>
                <Button type="primary">确定</Button>
              </FormItem>
            </Form>
          </BlockCol>
        </BlockRow>
      </Layout>
    );
  }
}

