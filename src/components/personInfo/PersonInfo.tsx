import React, {FC, useEffect, useState} from 'react';
import {State, FriendsData, PersonInfoProps, Brastlewark} from '../../interfaces/appInterfaces';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import locale from '../../shared/locale';
import Avatar from '@material-ui/core/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import { PersonEnum } from '../../shared/enums';
import {useFetchGetPersonDataMutation} from "../../services/app.query";
import {getFriendsList} from "../../shared/utils";
import {showModal} from "../../actions/modalActions";

const PersonInfo: FC<PersonInfoProps> = ({panelId}) => {
  const dispatch = useDispatch();
  const classes = styles();
  const globalData = useSelector((state: State) => state.home.globalData);
  const [data, setData] = useState<Brastlewark>();
  const [friendsListData, setFriendsListData] = useState<FriendsData[]>([]);

  const {mutateAsync} = useFetchGetPersonDataMutation({onSuccess: (person: Brastlewark) => {
      setData(person as Brastlewark);
      setFriendsListData(getFriendsList(person.friends, globalData));
    }});

  useEffect(() => {
    (async () => await mutateAsync(panelId))();
  }, [panelId, mutateAsync])

  const getProfessions = (data: Brastlewark) => (
    data?.professions?.length ? data.professions?.map((profession: string, index) => (
      <Typography key={`${profession}-${index}`} variant="subtitle1" color="textSecondary">
        {profession}
      </Typography>
    )) :
    <Typography variant="subtitle1" color="textSecondary">
      No works (Citizen stopped)
    </Typography>
  );

  const getPersonInfo = (infoType: PersonEnum) => {
    if (data) return data[infoType];

  }

  const handleClickFriend = (friendId: number) => {
    dispatch(showModal(
      <PersonInfo panelId={friendId}/>
    ));
  }

  const getFriends = () => (
    friendsListData.length ? friendsListData?.map((friend: FriendsData) => (
      <IconButton onClick={() => handleClickFriend(friend.id)}>
        <Avatar alt={`panel-${friend.id}-avatar`} src={friend.thumbnail} />
      </IconButton>
    )) :
    <Typography  style={{paddingLeft: 10}} variant="subtitle1" color="textSecondary">
      {locale.NoFriends}
    </Typography>
  )

  return (
    <Card className={classes.root}>
      <Grid container justify="flex-start">
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.imageContainer}>
            <img className={classes.cover} alt="complex" src={getPersonInfo(PersonEnum.THUMBNAIL) as string} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className={classes.details}>
            <Grid justify="space-between" container direction='column'>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {getPersonInfo(PersonEnum.NAME)}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid container direction='row'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Age}: ${getPersonInfo(PersonEnum.AGE)} ${locale.YearsOld}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Weight}: ${Math.round(getPersonInfo(PersonEnum.WEIGHT) as number || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Height}: ${Math.round(getPersonInfo(PersonEnum.HEIGHT) as number || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.HairColor}: `}
                      <Avatar alt={`hair-color-id-${getPersonInfo(PersonEnum.ID)}-${getPersonInfo(PersonEnum.HAIR_COLOR)}`} style={{backgroundColor: getPersonInfo(PersonEnum.HAIR_COLOR) as string}}> </Avatar>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>  
                  <CardContent className={classes.content}>
                    <Typography style={{textDecoration: 'underline'}} variant="subtitle1" color="textSecondary">
                      {`${locale.Professions}:`}
                    </Typography>
                    {getProfessions(data as Brastlewark)}
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
            {<CardContent className={classes.content}>
              <div className={classes.friendsThubnails}>
                <Typography component="h5" variant="h5">
                  {`${locale.Friends}: `}
                </Typography>
                {getFriends()}
              </div>
            </CardContent>}
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PersonInfo;