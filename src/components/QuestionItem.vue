<template>
  <div class="question-item">
    <h4 class="text-md font-bold">{{index}}、{{question.title}}</h4><i class="invisible">hidden</i>
    <div class="banner-wrap">
      <img :src="question.banner" alt="">
    </div>
    <fieldset class="filed-wrap">
      <label class="field-group"
        v-for="(item, index) in question.items"
        :key="index"
      >
        <input class="form-check-input" type="radio"
          :name="question.id"
          v-model="selected"
          :value="item.value"/>
        <p v-html="item.name"></p>
      </label>
    </fieldset>
  </div>
</template>

<script>
const banner = require('@/assets/img/banner1.png')

export default {
  name: 'QuestionItem',
  props: {
    index: Number,
    question: { type: Object, required: true },
    onSelect: { type: Function }
  },
  created () {
  },
  data () {
    return {
      banner,
      selected: null
    }
  },
  watch: {
    selected (newVal, oldVal) {
      this.$emit('onSelect', { [this.question.id]: newVal })
    }
  }
}
</script>

<style lang="less" scoped>
  .question-item {
    text-align: left;
    font-family: alibaba-bold;
    padding: 20px
  }
  .banner-wrap {
    margin: 20px 0;
    img {
      box-shadow: 0px 3px 8px 0px #4761b7
    }
  }
  .filed-wrap {
    padding: 10px;
    border-radius: 3px;
    color: #2a4d81;
    box-shadow: inset 0px 0px 10px 5px #3c67f1;
    background-color: #ffffff;
  }
  .field-group {
    display: flex;
    font-family: alibaba-bold;
    flex-direction: row;
    padding: 6px 0;
    & > input[type=radio] {
      visibility: hidden;
      width: 24px;
      margin: 6px;
      position: relative;

      &::after {
        visibility: visible;
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #4761b7
      }

      &:checked {
        &::after{
          content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDktMDhUMjA6MDg6MTIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTA4VDIwOjEyOjU3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTA4VDIwOjEyOjU3KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBiYzZhNDU0LTdkZWEtNDliNS1hMGZjLTYyYzViYjZkYWM5NiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBmMTY0NGQwLTNkODctYmE0MS1iOWYyLTc2MzA0MzMyMzQ1ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRiM2RmMTIxLTkxZjItNGI1Yi05N2M4LTJkOTM4MDA4MGU5OSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGIzZGYxMjEtOTFmMi00YjViLTk3YzgtMmQ5MzgwMDgwZTk5IiBzdEV2dDp3aGVuPSIyMDIwLTA5LTA4VDIwOjA4OjEyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjNmE0NTQtN2RlYS00OWI1LWEwZmMtNjJjNWJiNmRhYzk2IiBzdEV2dDp3aGVuPSIyMDIwLTA5LTA4VDIwOjEyOjU3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZNxv3AAABB0lEQVQ4y9XUvyvFYRTH8ddXDLesslAyMpldg4HuRKHYbt0yyw2rKKOSLCbFYJCSQcrEYFA2E/+B7Ej6Wo4y+Hm/zx0803nqPO9zes7nfLI8zzXjZO/gh1qWitmKjpTgNgyhhJtU4DFUcIYTPBcF92ENGZZwm+KPF7GCbdSRFx1eT8BGMYfNFKoYxi66UI34R7lVcI7HL3InsRdTr2Hntzoex3Q8evoEuh+SmsfGXxfkMCY88SFnEKdoxzoWGtm8btxhKwCduEQvjqPga6MrXY/OqihjNoqVcV/EK0q4Qn/cXzCCixQmNIWDiFexnMrdWnAd3Q98I8GGbHMmZHdUyI+bZvT/BvwGRiZ7AVmnQEMAAAAASUVORK5CYII=')
        }
      }
    }
    & > p {
      font-size: 16px;
      line-height: 1.6
    }
  }
</style>
