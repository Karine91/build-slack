import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import firebase from "firebase";
import Message from "./Message";

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    messagesLoading: true,
    messages: []
  };

  componentDidMount = () => {
    const { currentChannel: channel, currentUser: user } = this.props;

    if (channel && user) {
      this.addListeners(channel.id);
    }
  };

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      this.setState({ messages: loadedMessages, messagesLoading: false });
    });
  };

  displayMessages = messages =>
    messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
        user={this.props.currentUser}
      />
    ));

  render() {
    const { messagesRef, messages } = this.state;
    const { currentChannel, currentUser } = this.props;
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={messagesRef}
          currentUser={currentUser}
          currentChannel={currentChannel}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
