import { PropTypes } from 'prop-types';
import { StyledListContainer } from './Card.styles';

export const Card = ({
  title,
  projectType,
  ImageComponent,
  src,
  backgroundColor,
  ...props
}) => {
  const renderImage = () => {
    if (ImageComponent) return <ImageComponent />;
    if (src) return <img src={src} alt={title} />;
    return null;
  };

  return (
    <StyledListContainer bg={backgroundColor} {...props}>
      <article>
        <figure className="image-wrapper">{renderImage()}</figure>
        <div className="card-info">
          <h3>{title}</h3>
          <p>{projectType}</p>
        </div>
      </article>
    </StyledListContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  ImageComponent: PropTypes.elementType,
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Card.defaultProps = {
  ImageComponent: null,
  imageSrc: null,
  backgroundColor: null,
};
