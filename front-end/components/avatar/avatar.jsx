export const Avatar = ({imgSrc}) => {

    return (
      <div style={{ width: `56px`, heigth: `56px`, borderRadius: `50%` }}>
        <img style={{width:`100%`,height:`100%`,borderRadius: `50%` }} src={imgSrc} />
      </div>
    );
}