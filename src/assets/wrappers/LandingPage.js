import styled from 'styled-components';

const Wrapper = styled.div`
.home-header h1.MuiTypography-h5 {
  margin-top: 64px;
}
.home-header .main.autocomplete {
  margin-top: 24px;
}

.qualifications-list {
  margin-top: 80px;
  scroll-margin-top: 160px;
  
}

.qualifications-list .filters.container {
  display: flex;
  flex-direction: column;
}

.qualifications-list .main.autocomplete,
.qualifications-list .multiple.select {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-left: 6px;
  padding-top: 8px;
}
.qualifications-by-region {
  margin-top: 60px;
}

//QualificationListItem
.qualifications-list .qualification-card,
.qualifications-by-region .qualification-card{
  display: flex;
  margin-top: 12px;
}

.qualifications-list img,
.qualifications-by-region img {
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 4px;
  width: 151px;
}

.qualifications-list a.link,
.qualifications-by-region a.link{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;
}

.qualifications-list .icons-container,
.qualifications-by-region .icons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
}

@media (min-width: 768px) {
  .qualifications-list .filters.container {
    flex-direction: row;
  }
  .qualifications-by-region {
    margin-top: 240px;
  }
}
`;

export default Wrapper;