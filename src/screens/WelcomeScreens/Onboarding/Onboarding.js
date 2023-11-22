import {ScrollView, View} from 'react-native';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {styles} from './styles';
import ImageCropPicker from 'react-native-image-crop-picker';
import {
  CustomButton,
  CustomModal,
  CustomPicker,
  CustomText,
  LabelInput,
  ProfileData,
  ProfilePhoto,
} from '../../../components';
import Swiper from 'react-native-swiper';
import {strings} from '../../../strings/strings';
import {CheckBox} from 'react-native-elements';
import {theme} from '../../../utils/theme';
import {skills} from '../../../constants/DummyData';
import MonthPicker from 'react-native-month-year-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {
  basicprofileHandler,
  educationFieldsHandler,
  experienceFieldsHandler,
} from '../../../sharedfunctions/sharedfunctions';
import {Images} from '../../../constants/Images';
import {useDispatch, useSelector} from 'react-redux';
import supabase from '../../../supabase/service';
import {setAppLoading} from '../../../redux/AppLoader/appLoaderAction';

import {handleUploadImage} from '../../../sharedfunctions/supabaseHandler';
import {SUPABASE_TABLES} from '../../../supabase/tables';
import {
  throwError,
  throwSuccess,
} from '../../../sharedfunctions/handleToastMessage';

const Onboarding = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [image, setimage] = useState('');
  const [name, setname] = useState(user?.name || '');
  const [checked, setchecked] = useState();
  const [error, seterror] = useState({type: '', msg: ''});
  const data = [strings.careeradvice, strings.professional, strings.mentor];
  const [skillsList, setskillsList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [educationmodal, seteducationmodal] = useState(false);
  const [startdate, setstartDate] = useState('');
  const [showstartpicker, setShowstartpicker] = useState(false);
  const [enddate, setendDate] = useState('');
  const [showendpicker, setShowendpicker] = useState(false);
  const [currentindex, setcurrentindex] = useState(0);
  const [studyprogress, setstudyprogress] = useState(false);
  const [alleducation, setalleducation] = useState([]);
  const [allexperience, setallexperience] = useState([]);
  const [institue, setinstitute] = useState('');
  const [degree, setdegree] = useState('');
  const [experiencemodal, setexperiencemodal] = useState(false);
  const [title, settitle] = useState('');
  const [company, setcompany] = useState('');
  const [currentlyworking, setcurrentlyworking] = useState(false);
  const [onboardingData, setonboardingData] = useState();
  const [opentowork, setopentowork] = useState(false);
  const [base64Image, setBase64Image] = useState('');
  const [imagedata, setimagedata] = useState('');
  const [profile, setprofile] = useState('');
  const swipeRef = useRef();

  const handlePickImage = async () => {
    try {
      ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
      })
        .then(async image => {
          if (image?.path) {
            const response = await fetch(image?.path);
            const arrayBuffer = await response.arrayBuffer();
            setBase64Image(arrayBuffer);
            setimagedata(image);

            setimage(image?.path);
          }
        })
        .catch(e => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setskillsList(skills);
  }, []);

  const handleEducationData = async () => {
    dispatch(setAppLoading(true));
    const data = {
      institue,
      degree,
      startdate,
      enddate,
      studyprogress,
    };
    seterror({type: '', msg: ''});
    const error = await educationFieldsHandler(data);
    if (error) {
      seterror(error);
    } else {
      let arr = [...alleducation];
      arr.push({
        heading: institue,
        description: degree,
        duration: studyprogress
          ? `${startdate} - ${strings.inprogress}`
          : `${startdate} - ${enddate}`,
        startdate: startdate,
        enddate: studyprogress ? strings.inprogress : enddate,
      });
      setalleducation(arr);
      seteducationmodal(false);
      setinstitute('');
      setdegree('');
      setstartDate('');
      setstudyprogress(false);
      setendDate('');
      dispatch(setAppLoading(false));
    }
  };

  const handleExperienceData = async () => {
    dispatch(setAppLoading(true));
    const data = {
      title,
      company,
      startdate,
      enddate,
      currentlyworking,
    };
    seterror({type: '', msg: ''});
    const error = await experienceFieldsHandler(data);
    if (error) {
      seterror(error);
    } else {
      let arr = [...allexperience];
      arr.push({
        heading: title,
        description: company,
        duration: currentlyworking
          ? `${startdate} - ${strings.present}`
          : `${startdate} - ${enddate}`,
        startdate: startdate,
        enddate: studyprogress ? strings.present : enddate,
      });
      setallexperience(arr);
      setexperiencemodal(false);
      settitle('');
      setcompany('');
      setstartDate('');
      setcurrentlyworking(false);
      setendDate('');
      dispatch(setAppLoading(false));
    }
  };

  const handleBasicData = async () => {
    const data = {
      profile_image: image,
      name: name,
      purpose: checked,
      skills: selectedSkills,
    };
    seterror({type: '', msg: ''});
    const error = await basicprofileHandler(data);
    if (error) {
      seterror(error);
    } else {
      setonboardingData(data);
      swipeRef.current.scrollBy(1, true);
    }
  };

  const handleProfessionalData = async () => {
    seterror({type: '', msg: ''});
    if (alleducation?.length < 1) {
      seterror({type: strings.education, msg: strings.educationrequired});
    } else {
      dispatch(setAppLoading(true));
      let profileData = {
        ...onboardingData,
        education: alleducation,
        experience: allexperience,
        opentowork: opentowork,
      };
      if (image) {
        const payload = {
          image,
          imagedata,
          base64Image,
          user,
        };
        const result = await handleUploadImage(payload);
        setprofile(result?.publicUrl);
        profileData = {
          ...profileData,
          profile_image: result?.publicUrl,
        };
      }
      const {data, error} = await supabase
        .from(SUPABASE_TABLES.USERS)
        .update(profileData)
        .eq('id', user?.id);
      if (error) {
        dispatch(setAppLoading(false));
        throwError(error?.message);
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'MyDrawer'}],
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.swiperview}>
          <Swiper
            loop={false}
            ref={swipeRef}
            onIndexChanged={val => setcurrentindex(val)}
            scrollEnabled={false}
            showsPagination={false}>
            <View>
              <ProfilePhoto
                customView={styles.photo}
                photo={image}
                onPress={handlePickImage}
              />
              <LabelInput
                rowStyle={styles.row}
                labelstyle={styles.label}
                label={strings.name}
                placeholder={strings.entername}
                value={name}
                onChangeText={setname}
                disabled={true}
                error={error?.type == strings.name ? error?.msg : null}
              />
              <CustomText textStyle={styles.lookingfor}>
                {strings.lookingfor}
              </CustomText>
              {data?.map((item, index) => {
                return (
                  <CheckBox
                    key={index}
                    textStyle={styles.options}
                    activeOpacity={theme.opacity}
                    checkedColor={theme.primary}
                    title={item}
                    checked={checked == item}
                    onPress={() => setchecked(item)}
                  />
                );
              })}
              {error?.type == strings.lookingfor ? (
                <CustomText textStyle={styles.error}>{error?.msg}</CustomText>
              ) : null}

              <CustomText textStyle={styles.goodat}>
                {strings.goodat}
              </CustomText>
              <CustomPicker
                multiple={true}
                min={0}
                max={5}
                disabled={false}
                data={skillsList}
                pickervalue={selectedSkills}
                setdata={setskillsList}
                setPickerValue={setSelectedSkills}
                selectedText={
                  selectedSkills.length > 1
                    ? `${selectedSkills.length} ${strings.havebeenselected}`
                    : selectedSkills.length == 1
                    ? `${selectedSkills.length} ${strings.hasbeenselected}`
                    : null
                }
                placeholder={strings.selectskills}
                title={strings.selectskills}
              />
              {error?.type == strings.goodat ? (
                <CustomText textStyle={styles.error}>{error?.msg}</CustomText>
              ) : null}
            </View>
            <View>
              <AntDesign
                onPress={() => {
                  setcurrentindex(0);
                  swipeRef.current.scrollBy(-1, true);
                }}
                style={styles.left}
                name="left"
                size={20}
                color={theme.black}
              />
              <CustomText textStyle={styles.heading}>
                {strings.professionalsummary}
              </CustomText>
              <ProfileData
                onAdd={() => seteducationmodal(true)}
                label={strings.education}
                tintColor={profile ? null : theme.gray}
                img={profile ? {uri: profile} : Images.education}
                data={alleducation.length ? alleducation : []}
              />
              {error?.type == strings.education ? (
                <CustomText textStyle={styles.error}>{error?.msg}</CustomText>
              ) : null}
              <ProfileData
                img={Images.experience}
                data={allexperience?.length ? allexperience : []}
                onAdd={() => setexperiencemodal(true)}
                label={strings.experience}
                tintColor={theme.gray}
              />
              <CheckBox
                textStyle={styles.options}
                activeOpacity={theme.opacity}
                checkedColor={theme.primary}
                title={strings.newopportunity}
                checked={opentowork}
                onPress={() => setopentowork(!opentowork)}
              />

              <CustomModal
                heading={strings.addeducation}
                modalVisible={educationmodal}
                setModalVisible={() => seteducationmodal(false)}
                onCross={() => seteducationmodal(false)}
                onSave={handleEducationData}
                label1={strings.institue}
                placeholder1={strings.institueplaceholder}
                error1={error?.type == strings.institue ? error?.msg : null}
                input1={institue}
                onChangeInput1={setinstitute}
                input2={degree}
                onChangeInput2={setdegree}
                label2={strings.degree}
                placeholder2={strings.degreeplaceholder}
                startdate={startdate}
                onStartDate={() => setShowstartpicker(true)}
                showstartpicker={showstartpicker}
                onChangeStartDate={(event, val) => {
                  setShowstartpicker(false);
                  const date = moment(val).format('MMM-YYYY');
                  setstartDate(date.toString());
                }}
                checked={studyprogress}
                onCheck={() => setstudyprogress(!studyprogress)}
                startdateError={
                  error?.type == strings.startdate ? error?.msg : null
                }
                error2={error?.type == strings.degree ? error?.msg : null}
                enddate={enddate}
                showendpicker={showendpicker}
                endDateError={
                  error?.type == strings.enddate ? error?.msg : null
                }
                onEndDate={() => setShowendpicker(true)}
                onChangeEndDate={(event, val) => {
                  setShowendpicker(false);
                  const date = moment(val).format('MMM-YYYY');
                  setendDate(date.toString());
                }}
              />
              <CustomModal
                heading={strings.addexperience}
                modalVisible={experiencemodal}
                setModalVisible={() => setexperiencemodal(false)}
                onCross={() => setexperiencemodal(false)}
                onSave={handleExperienceData}
                input1={title}
                onChangeInput1={settitle}
                label1={strings.title}
                placeholder1={strings.titleplaceholder}
                error1={error?.type == strings.title ? error?.msg : null}
                input2={company}
                onChangeInput2={setcompany}
                label2={strings.companyname}
                placeholder2={strings.companyplaceholder}
                error2={error?.type == strings.companyname ? error?.msg : null}
                startdate={startdate}
                onStartDate={() => setShowstartpicker(true)}
                showstartpicker={showstartpicker}
                onChangeStartDate={(event, val) => {
                  setShowstartpicker(false);
                  const date = moment(val).format('MMM-YYYY');
                  setstartDate(date.toString());
                }}
                checked={currentlyworking}
                onCheck={() => setcurrentlyworking(!currentlyworking)}
                startdateError={
                  error?.type == strings.startdate ? error?.msg : null
                }
                enddate={enddate}
                endDateError={
                  error?.type == strings.enddate ? error?.msg : null
                }
                showendpicker={showendpicker}
                onEndDate={() => setShowendpicker(true)}
                onChangeEndDate={(event, val) => {
                  setShowendpicker(false);
                  const date = moment(val).format('MMM-YYYY');
                  setendDate(date.toString());
                }}
              />
            </View>
          </Swiper>
        </View>
        <CustomButton
          title={currentindex == 0 ? strings.next : strings.save}
          onPress={async () => {
            if (currentindex == 0) {
              handleBasicData();
            } else {
              handleProfessionalData();
            }
          }}
          customStyle={styles.next}
        />
      </ScrollView>
    </View>
  );
};

export default Onboarding;
