import React, { Component, useState } from 'react';
import {Modal, TouchableOpacity, Text, View, Alert } from 'react-native';

const ModalHome = (props) => {
    const [modalVisible, setModalVisible] = useState(true)

    return (
        <View>
              <Modal
                animationType=""
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{
                    width: 170, height: 100, backgroundColor: '#F2F2F2', marginRight: 20,
                    marginTop: 40, justifyContent: 'space-around'
                  }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                      <Text style={{ marginLeft: 10,fontSize: 20, borderColor: 'black' }}>Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                      <Text style={{ marginLeft: 10,fontSize: 20, borderColor: 'black' }}>Contact with us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                      <Text style={{ marginLeft: 10,fontSize: 20, borderColor: 'black' }}>Send feedback</Text>
                    </TouchableOpacity>
                  </View>
                </View></Modal>
            </View>
    )
}

export default ModalHome