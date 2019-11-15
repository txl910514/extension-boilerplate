<template>
  <div>
    <div ref="qrCodeDiv"></div>
    <div class="qrCodeDiv_text">用手机扫一扫</div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
export default {
  data() {
    return {
      url: '',
    };
  },
  mounted() {
    var data = chrome.extension.getBackgroundPage().resdata;
    this.url = data.url;
    new QRCode(this.$refs.qrCodeDiv, {
      text: data.url,
      width: 150,
      height: 150,
      colorDark: '#333333', //二维码颜色
      colorLight: '#ffffff', //二维码背景色
      correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
    });
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
.qrCodeDiv_text {
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
}
</style>
