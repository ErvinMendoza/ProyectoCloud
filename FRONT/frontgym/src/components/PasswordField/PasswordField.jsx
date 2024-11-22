import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomTextField from '../CustomTextField/CustomTextField';

export default function PasswordField  ({ll, isDisabled,name}) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <CustomTextField
        disabled={isDisabled}
            name={name}
            type={showPassword ? 'text' : 'password'}
            label={ll}
            sx={{ width: '70%', marginTop: 3 }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff sx={{ color: '#959595' }} /> : <Visibility sx={{ color: '#959595' }} />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}