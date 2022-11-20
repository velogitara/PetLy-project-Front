import { useLocation } from 'react-router-dom';
import { useNotices } from 'hooks';
import { favoriteCheck } from 'helpers';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import { useSelector } from 'react-redux';
import { selectAuthId, selectAuthToken } from 'redux/authState';
import { CategoriesList, Message } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const isLogged = useSelector(selectAuthToken);
  const authId = useSelector(selectAuthId);

  const categoryName = useLocation().pathname.replace('/notices/', '');

  const notices = useNotices({ categoryName, page: 1, limit: 8 });

  const isNotices = notices.length !== 0;

  return (
    <>
      {!isNotices && <Message>Looks like there are no Ads here, yet.</Message>}
      {isNotices && (
        <CategoriesList>
          {notices.map(
            ({
              _id,
              category,
              imageURL,
              title,
              breed,
              birthday,
              location,
              favorite,
              owner,
              price,
            }) => (
              <NoticeCategoryItem
                _id={_id}
                imageURL={imageURL}
                title={title}
                breed={breed}
                birthday={birthday}
                location={location}
                key={_id}
                category={category}
                favorite={favoriteCheck({ userId: isLogged && authId ? authId : null, favorite })}
                owner={owner?._id ?? owner}
                price={price}
              />
            )
          )}
        </CategoriesList>
      )}
    </>
  );
};

export default NoticesCategoriesList;
