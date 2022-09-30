export const StyledInput = ({ ref, placeHolder }) => {
    return (
        <input
            ref={ref}
            placeholder={placeHolder}
            style={{
                backgroundColor: ` #f1f1f1`,
                borderRradius: `5px`,
                padding: `15px`,
                resize: `none`,
                fontSize: `14px`,
                border: `1px solid transparent`,
                color: `#000`,
                outline: "none",
        }}
      />
    );
}