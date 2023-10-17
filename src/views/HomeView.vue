<template>
  <div class="home">
    <div class="welcome">
      <div class="container">
        <div class="row">
          <div
            class="d-flex justify-content-between align-items-center col-sm-12"
          >
            <div class="welcome-content">
              <h3>Hello , <span class="broker-name">Karim Gamal</span></h3>
              <p>Welcome back, your dashboard is ready !</p>
            </div>
            <div class="welcome-img">
              <img src="../assets/imgs/welcome-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistics">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="stat-box">
              <div class="stat-info">
                <h6>Customers</h6>
                <span>35</span>
              </div>
              <div>
                <font-awesome-icon icon="people-group" class="stat-icon" />
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="stat-box">
              <div class="stat-info">
                <h6>Drafts</h6>
                <span>12</span>
              </div>
              <div>
                <font-awesome-icon icon="paste" class="stat-icon" />
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="stat-box">
              <div class="stat-info">
                <h6>Work</h6>
                <span>18</span>
              </div>
              <div>
                <font-awesome-icon icon="briefcase" class="stat-icon" />
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="stat-box">
              <div class="stat-info">
                <h6>Earnings</h6>
                <span>5300$</span>
              </div>
              <div>
                <font-awesome-icon icon="money-bill" class="stat-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.welcome {
  background-color: transparent;
  padding: 15px;
  box-shadow: 5px 10px 10px #eee;
}
.welcome-img img {
  width: 400px;
  height: 100%;
}
.stat-box {
  background-color: #ccc;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat-box .stat-info {
  text-align: center;
}
.broker-name {
  color: #73e29b;
  font-weight: 600;
}
.stat-box .stat-info h6,
.stat-box .stat-info span {
  font-weight: bold;
}
.stat-box .stat-info h6 {
  color: #11101d;
  font-size: 16px;
}
.stat-box .stat-info span {
  color: #016345;
  font-size: 24px;
}
.stat-box .stat-icon {
  font-size: 40px;
  color: #777;
}
@media (max-width: 991px) {
  .welcome-img {
    display: none;
  }
}
@media (max-width: 991px) {
  .stat-box {
    margin-bottom: 10px;
  }
}
</style>
