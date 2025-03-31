import React from 'react';
import PropTypes from 'prop-types';
import { CopyButton as MantineCopyButton, Tooltip, ActionIcon } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import style from './copyButton.module.css';

const CopyButton = ({ value }) => {
    return (
        <MantineCopyButton value={value} timeout={2000}>
            {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                    <ActionIcon 
                        className={style.copyButton} 
                        color={copied ? 'teal' : 'gray'} 
                        variant="subtle" 
                        onClick={copy}
                    >
                        {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                    </ActionIcon>
                </Tooltip>
            )}
        </MantineCopyButton>
    );
};

CopyButton.propTypes = {
    value: PropTypes.string.isRequired,
};

export default CopyButton;