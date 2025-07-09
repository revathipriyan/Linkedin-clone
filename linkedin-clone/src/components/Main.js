import styled from "styled-components";

const Main = (props) => {
  return <Container><ShareBox>Share
            <div>
                <img src="/images/user.svg" alt="" />
                <button>Start a post</button>
            </div>

            <div>
                <button>
                    <img src="/images/article.svg" style={{ width: "24px", height: "24px", marginRight: "3px"}} alt="" />
                    <span>Photo</span>
                    </button>

                    <button>
                                           <img src="/images/article.svg" style={{ width: "24px", height: "24px", marginRight: "3px"}} alt="" />

                        <span>Video</span>
                    </button>

                    <button>
                                            <img src="/images/article.svg" style={{ width: "24px", height: "24px", marginRight: "3px"}} alt="" />
                        <span>Event</span>
                    </button>

                    <button>
                                           <img src="/images/article.svg" style={{ width: "24px", height: "24px", marginRight: "3px"}} alt="" />

                        <span>Write articles</span>
                    </button>
            </div>
</ShareBox>
  </Container>;
};

const Container = styled.div`
  grid-area: main;
  background-color: #fff;
`;

const CommonCard = styled.div`
background-color: #fff;
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px ruby-align(0 0 0 / 15%), 0 0 0 ruby-align(0 0 0 / 20%);
border: 1px solid rgba(0, 0, 0, 0.08);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);



`;


const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background-color: white;


div {
    button {
        outline: none;
        color: rgba(0,0,0,0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child{
        display: flex;
        align-items: center;
        padding: 8px 16px 0px 16px;
        img{
            width: 48px;
            border-radius: 50%;
            margin-right:8px;

        }
        button{
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px ;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 35px;
            background-color: white;
            text-align: left;

        }
    }

    &:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 4px;

        button {
            img{
                margin: 0 4px 0 -2px;
            }
            span{
                color: #70b5f9;
            }
        }
    }
}

`;

export default Main;