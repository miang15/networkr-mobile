import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, SearchBar, UserCard} from '../../../components';
import {styles} from './styles';
import {
  getAllUsers,
  handleAddRequest,
  handleDismissUser,
} from '../../../sharedfunctions/supabaseHandler';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateAllUser} from '../../../redux/Auth/authAction';
import {strings} from '../../../strings/strings';

const AllUsers = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const alluser = useSelector(state => state.auth.alluser);
  const [search, setsearch] = useState('');
  const [searchData, setsearchData] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getAllUsers(user);
    });
  }, []);

  const handleSearch = async val => {
    if (val.trim()) {
      let arr = alluser?.filter(item => {
        return (
          item?.name?.toLowerCase().includes(val?.toLowerCase()) ||
          item?.skills?.some(skill =>
            skill?.toLowerCase().includes(val?.toLowerCase()),
          ) ||
          item?.purpose?.toLowerCase().includes(val?.toLowerCase())
        );
      });
      setsearch(val);
      setsearchData(arr);
    } else {
      setsearch('');
      setsearchData([]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar value={search} onChangeText={val => handleSearch(val)} />
      {alluser?.length ? (
        <FlatList
          numColumns={2}
          style={styles.list}
          data={search ? searchData : alluser}
          renderItem={({item, index}) => {
            return (
              <UserCard
                onClose={() => handleDismissUser(item?.id, user)}
                onButtonPress={() => handleAddRequest(item?.id, user)}
                name={item?.name}
                title={item?.purpose}
                key={index}
                ButtonLabel={strings.connect}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
        />
      ) : null}
    </View>
  );
};

export default AllUsers;
