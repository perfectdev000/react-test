import React from 'react';
import { makeStyles } from '@mui/styles';

const Header = (props) => {

    const classes = useStyles();

    //----- Render -----
    return (
        <div className={classes.header}>
            <div className={classes.logo}> LOGO </div>
            <div className={classes.shareBox}>
                <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0629 2.99658e-05C10.7405 2.99658e-05 11.4328 0.0371622 12.1104 0.066868C12.5549 0.066868 12.9994 0.148559 13.4148 0.200544V4.38164H11.7024C11.3672 4.38164 11.0247 4.38164 10.6895 4.38164C9.60382 4.38164 8.80229 4.83465 8.744 6.21597C8.70756 7.21854 8.6857 9.41677 8.6857 9.53559H13.218C12.9994 11.1397 12.7954 12.6844 12.5768 14.2365H8.6857L8.59826 25.9926H3.81821L3.90565 14.2291H0L0.0364333 9.55044H3.96395V9.20883C3.96395 8.26567 3.96395 7.32251 3.96395 6.37935C3.96759 5.77953 4.01876 5.181 4.11697 4.58958C4.22411 3.89202 4.46686 3.22331 4.83098 2.62265C5.1951 2.022 5.67325 1.50151 6.23739 1.09172C7.24696 0.377202 8.44758 -0.00389171 9.67669 2.99658e-05H10.0629Z" fill="white"/>
                </svg>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4296 4.49561C17.6076 4.49558 17.7837 4.53165 17.9478 4.60171C18.1119 4.67177 18.2607 4.77442 18.3855 4.90368C18.5103 5.03294 18.6086 5.18622 18.6747 5.35458C18.7407 5.52295 18.7733 5.70304 18.7704 5.88435C18.7646 6.25077 18.6178 6.60019 18.3615 6.85722C18.1052 7.11426 17.7601 7.25829 17.4005 7.25825C17.041 7.25825 16.6963 7.11271 16.4421 6.85367C16.188 6.59462 16.0452 6.24327 16.0452 5.87693C16.0452 5.51058 16.188 5.15923 16.4421 4.90018C16.6963 4.64114 17.041 4.49561 17.4005 4.49561H17.4296Z" fill="white"/>
                    <path d="M22.5158 6.27081C22.6834 8.08287 22.7927 16.6678 22.2681 18.6433C22.0118 19.8445 21.3937 20.934 20.5001 21.7596C19.6064 22.5852 18.482 23.1054 17.284 23.2477C15.2134 23.4478 13.1335 23.5321 11.0539 23.5002C8.95934 23.5652 6.86313 23.4509 4.78734 23.1586C3.61268 22.918 2.5437 22.3025 1.73534 21.4012C0.926977 20.4999 0.421253 19.3596 0.291473 18.1457C-0.0145668 16.2074 -0.0437156 7.18427 0.502784 5.22368C0.777553 4.05768 1.3963 3.00548 2.2757 2.2088C3.15509 1.41212 4.2529 0.909217 5.42128 0.767812C7.30057 0.549269 9.19178 0.455003 11.083 0.485607C13.1889 0.485607 15.3166 0.545019 16.5917 0.619283C18.1284 0.653478 19.5979 1.26739 20.716 2.34222C21.7725 3.37947 22.4138 4.77933 22.5158 6.27081ZM20.3298 17.767C20.6337 14.0071 20.68 10.2303 20.4683 6.4639C20.4267 5.5419 20.063 4.66543 19.443 3.99269C18.823 3.31994 17.9875 2.89524 17.0872 2.79523C15.21 2.6201 13.3249 2.5482 11.4401 2.57987C9.19578 2.57987 6.95877 2.63928 5.97507 2.75067C5.0641 2.79832 4.19894 3.17245 3.53232 3.80702C2.8657 4.44159 2.44048 5.29579 2.33174 6.21883C2.02236 10.0831 1.99557 13.9655 2.25159 17.8338C2.32659 18.6027 2.63505 19.3285 3.13399 19.9103C3.63293 20.492 4.2975 20.9006 5.03509 21.0792C7.0471 21.3737 9.08058 21.488 11.1122 21.4208C13.4803 21.4208 15.8048 21.3465 16.6792 21.25C17.5933 21.2047 18.4618 20.8295 19.1293 20.1913C19.7968 19.5532 20.2198 18.6938 20.3225 17.767" fill="white"/>
                    <path d="M11.4109 6.10743C12.1727 6.10634 12.927 6.25992 13.6298 6.55922C14.3327 6.85852 14.97 7.29753 15.5045 7.85062C16.039 8.40371 16.4601 9.05979 16.7431 9.78057C17.0261 10.5013 17.1654 11.2724 17.1528 12.0486C17.1394 13.6153 16.5193 15.1131 15.4275 16.2161C14.3358 17.319 12.8607 17.9378 11.3235 17.9378C10.5649 17.9388 9.81358 17.7864 9.11316 17.4894C8.41273 17.1924 7.77709 16.7567 7.24303 16.2076C6.70898 15.6585 6.28715 15.0068 6.00196 14.2903C5.71676 13.5739 5.57388 12.8069 5.5816 12.0337C5.58545 10.4606 6.20132 8.95327 7.29411 7.8423C8.3869 6.73133 9.86741 6.10742 11.4109 6.10743ZM11.3308 15.8138C12.32 15.812 13.2692 15.4153 13.9748 14.7087C14.6804 14.002 15.0862 13.0418 15.1053 12.0337C15.1149 11.5371 15.0282 11.0433 14.8502 10.5809C14.6721 10.1184 14.4062 9.69637 14.0677 9.33894C13.7292 8.9815 13.3247 8.69573 12.8775 8.49802C12.4304 8.30031 11.9493 8.19456 11.4619 8.18683H11.4255C10.4375 8.18855 9.4894 8.58425 8.78401 9.2893C8.07861 9.99435 7.67195 10.9527 7.65101 11.9595C7.64135 12.4565 7.72799 12.9506 7.90596 13.4135C8.08393 13.8764 8.34974 14.2989 8.68816 14.6569C9.02659 15.015 9.43098 15.3014 9.87819 15.4999C10.3254 15.6984 10.8066 15.8051 11.2943 15.8138H11.3308Z" fill="white"/>
                </svg>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8633 2.55482C23.6948 2.81437 23.5098 3.06244 23.3095 3.29747C22.7984 3.94849 22.2027 4.52562 21.5389 5.01298L21.4587 5.16893C21.4823 5.91338 21.4457 6.65853 21.3494 7.39687C21.156 8.92204 20.7256 10.4061 20.0743 11.7933C19.4053 13.228 18.5119 14.5422 17.4292 15.6848C15.6165 17.5981 13.2849 18.9169 10.7328 19.4723C9.84339 19.6644 8.93833 19.7713 8.02941 19.7916H7.59222C5.01424 19.7992 2.48723 19.06 0.305554 17.6602L0.188965 17.586C0.568757 17.6302 0.950703 17.6525 1.33297 17.6528C3.51816 17.6588 5.6414 16.913 7.35904 15.5363C6.35394 15.5135 5.38109 15.1703 4.57728 14.5549C3.77347 13.9395 3.1791 13.0828 2.87774 12.1052C3.17549 12.164 3.47802 12.1938 3.78129 12.1944C4.17646 12.1951 4.5703 12.1477 4.95444 12.0533L5.02731 12.0161C4.38057 11.8803 3.76865 11.6088 3.23047 11.2188C2.69229 10.8289 2.23965 10.329 1.90133 9.75105C1.41262 8.96841 1.15932 8.05711 1.17266 7.12952C1.84365 7.50342 2.59401 7.70481 3.35866 7.71621C2.34629 7.01252 1.6331 5.94405 1.3627 4.72593C1.09229 3.50782 1.28475 2.23052 1.90133 1.15122C3.10921 2.68153 4.61984 3.93536 6.33481 4.83105C8.04979 5.72674 9.93066 6.2442 11.8549 6.34974C11.8549 6.14923 11.8039 5.98584 11.7748 5.80761C11.6345 4.67915 11.8928 3.53663 12.5034 2.58453C12.8584 1.98966 13.3375 1.48169 13.9067 1.09665C14.4759 0.711622 15.1213 0.458961 15.797 0.356593C16.0882 0.30461 16.3831 0.277286 16.6787 0.274902C17.3066 0.280526 17.927 0.414932 18.5028 0.67011C19.0787 0.925288 19.5983 1.29601 20.0305 1.76019C20.08 1.80836 20.1445 1.83728 20.2127 1.84188H20.2856C21.2792 1.63056 22.2335 1.25956 23.1128 0.742769H23.1784C22.8315 1.86296 22.0992 2.8177 21.1163 3.43114C22.0704 3.28337 22.9968 2.98785 23.8633 2.55482Z" fill="white"/>
                </svg>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88152 0.480567C3.53346 0.488404 4.15574 0.759383 4.61196 1.2341C5.06817 1.70881 5.32109 2.34852 5.31526 3.01299C5.30761 3.68606 5.04038 4.32903 4.57133 4.8029C4.10228 5.27678 3.46909 5.5435 2.80865 5.54541C2.48364 5.54444 2.16202 5.47811 1.86221 5.35022C1.5624 5.22234 1.2903 5.03541 1.0615 4.80016C0.832708 4.5649 0.651715 4.28594 0.528891 3.97926C0.406068 3.67259 0.343827 3.34422 0.345746 3.01299C0.353437 2.33475 0.624698 1.6873 1.10004 1.21259C1.57539 0.737869 2.21603 0.474624 2.88152 0.480567Z" fill="white"/>
                    <path d="M4.97295 7.46094L4.87093 21.5118H0.579102L0.688397 7.46094H4.97295Z" fill="white"/>
                    <path d="M15.8808 7.11946C20.2528 7.11946 20.9815 10.0158 20.9815 13.8033L20.9232 21.5119H16.6459L16.6969 14.687C16.6969 13.0458 16.6969 10.9738 14.5109 10.9738C12.3249 10.9738 11.9314 12.7487 11.9169 14.5905L11.8731 21.5119H7.5813L7.69059 7.46108H11.793V9.38453H11.8586C12.2695 8.67532 12.8592 8.0912 13.5666 7.69288C14.2739 7.29455 15.073 7.09656 15.8808 7.11946Z" fill="white"/>
                </svg>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.4027 2.83248C24.2406 5.06042 24.2042 13.2295 23.2059 15.4129C22.9332 15.9794 22.4851 16.4388 21.9307 16.7199C21.1438 17.1284 16.5823 17.3289 12.1083 17.3289C7.99137 17.3289 3.95455 17.1581 3.00729 16.8462C2.5931 16.7171 2.2154 16.4885 1.90599 16.1797C1.59658 15.8708 1.36452 15.4906 1.22934 15.0713C0.500674 12.9028 0.303933 3.81278 1.81956 2.01557C2.30943 1.41641 3.01086 1.03764 3.77239 0.961018C5.56491 0.76793 9.02607 0.671387 12.4435 0.671387C16.6916 0.671387 20.8669 0.819916 21.6611 1.10955C22.062 1.24059 22.4278 1.46427 22.7299 1.76314C23.032 2.062 23.2622 2.42797 23.4027 2.83248ZM9.43412 12.5908C11.8533 11.3061 14.2652 10.0361 16.7208 8.75137L9.49241 4.91189C9.49241 7.48144 9.49241 10.0213 9.43412 12.6057" fill="white"/>
                </svg>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        maxWidth: 1831,
        height: 118,
        position: 'absolute',
        zIndex: 100,
    },
    logo: {
        width: 111,
        height: 69,
        margin: '24px 23px',
        background: '#BABABA',
        color: 'black',
        float: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareBox: {
        width: 173,
        height: 26,
        marginRight: '4.5vw',
        marginTop: 48,
        float: 'right',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default Header;