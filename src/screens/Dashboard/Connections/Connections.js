import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomText, Header, RequestCard, UserCard} from '../../../components';
import {styles} from './styles';
import {strings} from '../../../strings/strings';
import {getMyNetworkData} from '../../../sharedfunctions/supabaseHandler';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {
  acceptRequestAction,
  removeConnectionAction,
} from '../../../redux/Connects/connectsAction';
import {setAppLoading} from '../../../redux/AppLoader/appLoaderAction';

const Connections = () => {
  const user = useSelector(state => state.auth.user);
  const pendingUser = useSelector(state => state.network.pendingUser);
  const connectedUser = useSelector(state => state.network.connectedUser);
  const [selected, setselected] = useState(1);
  const dispatch = useDispatch();

  const fetchNetworkData = async () => {
    dispatch(setAppLoading(true));
    await getMyNetworkData('pending', user);
    await getMyNetworkData('connected', user);
  };

  useEffect(() => {
    fetchNetworkData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <CustomText
          onPress={() => setselected(1)}
          textStyle={selected == 1 ? styles.selectedlabel : styles.label}
          numberOfLines={1}>
          {strings.mynetwork}
        </CustomText>
        <CustomText
          onPress={() => setselected(2)}
          textStyle={selected == 2 ? styles.selectedlabel : styles.label}
          numberOfLines={1}>
          {strings.pendingRequest}
        </CustomText>
      </View>
      {selected == 1 ? (
        <>
          {connectedUser?.length ? (
            <FlatList
              data={connectedUser}
              renderItem={({item, index}) => {
                return (
                  <UserCard
                    onButtonPress={() =>
                      dispatch(removeConnectionAction(item?.id, user))
                    }
                    hideCross={true}
                    name={item?.name}
                    title={item?.purpose}
                    key={index}
                    ButtonLabel={strings.remove}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
            />
          ) : (
            <CustomText textStyle={styles.norequest} numberOfLines={1}>
              {strings.noperson}
            </CustomText>
          )}
        </>
      ) : (
        <>
          {pendingUser?.length ? (
            <FlatList
              style={styles.list}
              data={pendingUser}
              renderItem={({item, index}) => {
                return (
                  <RequestCard
                    onCheck={() =>
                      dispatch(acceptRequestAction(item?.id, user))
                    }
                    name={item?.name}
                    desc={item?.purpose}
                    photo={item?.profile_image || null}
                  />
                );
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
            />
          ) : (
            <CustomText textStyle={styles.norequest} numberOfLines={1}>
              {strings.norequest}
            </CustomText>
          )}
        </>
      )}
    </View>
  );
};

export default Connections;
