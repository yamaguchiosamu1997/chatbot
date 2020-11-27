import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput'


export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }

        this.imputName = this.imputName.bind(this)
        this.imputEmail = this.imputEmail.bind(this)
        this.imputDescription = this.imputDescription.bind(this)
    }

    imputName = (event) => {
        this.setState({ name: event.target.value })
    }

    imputEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    imputDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description

        const payload = {
            text:'お問い合わせがありました\n' +
                    'お名前：' + name + '\n' +
                    'Email：' + email + '\n' +
                    '問い合せ内容：\n' + description 
        }

        const url = 'https://hooks.slack.com/services/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'

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() =>{
            alert('送信が完了しました。。追ってご連絡します！')
            this.setState({
                name: "",
                email: "",
                description:""
            })
            return this.props.handleClose()
        })
    }

    render() {
        return(
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
                <DialogContent>
                    <TextInput 
                        label={"お名前(必須)"} multiline={false} rows={1}
                        value={this.state.name} type={"text"} onChange={this.imputName}
                    />
                    <TextInput 
                        label={"メールアドレス(必須)"} multiline={false} rows={1}
                        value={this.state.email} type={"email"} onChange={this.imputEmail}
                    />
                    <TextInput 
                        label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
                        value={this.state.description} type={"text"} onChange={this.imputDescription}
                    />
                </DialogContent>
            <DialogActions>
                <Button onClick={this.props.handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={this.submitForm} color="primary" autoFocus>
                    送信する
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}
