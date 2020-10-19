<template>
  <div class="content">
    <ul>
      <li>你好mylove1</li>
      <li>你好mylove2</li>
      <li>你好mylove3</li>
      <li>你好mylove4</li>
      <li>你好mylove5</li>
      <li>你好mylove6</li>
      <li>你好mylove7</li>
      <li>你好mylove8</li>
      <li>你好mylove9</li>
      <li>你好mylove10</li>
      <li>你好mylove11</li>
      <li>你好mylove12</li>
      <li>你好mylove13</li>
      <li>你好mylove14</li>
      <li>你好mylove15</li>
      <li>你好mylove16</li>
      <li>你好mylove17</li>
      <li>你好mylove18</li>
      <li>你好mylove19</li>
      <li>你好mylove20</li>
      <li>你好mylove21</li>
      <li>你好mylove22</li>
      <li>你好mylove23</li>
      <li>你好mylove24</li>
      <li>你好mylove25</li>
      <li>你好mylove26</li>
      <li>你好mylove27</li>
      <li>你好mylove28</li>
      <li>你好mylove29</li>
      <li>你好mylove30</li>
      <li>你好mylove31</li>
      <li>你好mylove32</li>
      <li>你好mylove33</li>
      <li>你好mylove34</li>
      <li>你好mylove35</li>
      <li>你好mylove36</li>
      <li>你好mylove37</li>
      <li>你好mylove38</li>
      <li>你好mylove39</li>
      <li>你好mylove40</li>
      <li>你好mylove41</li>
      <li>你好mylove42</li>
      <li>你好mylove43</li>
      <li>你好mylove44</li>
      <li>你好mylove45</li>
      <li>你好mylove46</li>
      <li>你好mylove47</li>
      <li>你好mylove48</li>
      <li>你好mylove49</li>
      <li>你好mylove50</li>
      <li>你好mylove51</li>
      <li>你好mylove52</li>
      <li>你好mylove53</li>
      <li>你好mylove54</li>
      <li>你好mylove55</li>
      <li>你好mylove56</li>
      <li>你好mylove57</li>
      <li>你好mylove58</li>
      <li>你好mylove59</li>
      <li>你好mylove60</li>
      <li>你好mylove61</li>
      <li>你好mylove62</li>
      <li>你好mylove63</li>
      <li>你好mylove64</li>
      <li>你好mylove65</li>
      <li>你好mylove66</li>
      <li>你好mylove67</li>
      <li>你好mylove68</li>
      <li>你好mylove69</li>
      <li>你好mylove70</li>
      <li>你好mylove71</li>
      <li>你好mylove72</li>
      <li>你好mylove73</li>
      <li>你好mylove74</li>
      <li>你好mylove75</li>
      <li>你好mylove76</li>
      <li>你好mylove77</li>
      <li>你好mylove78</li>
      <li>你好mylove79</li>
      <li>你好mylove80</li>
      <li>你好mylove81</li>
      <li>你好mylove82</li>
      <li>你好mylove83</li>
      <li>你好mylove84</li>
      <li>你好mylove85</li>
      <li>你好mylove86</li>
      <li>你好mylove87</li>
      <li>你好mylove88</li>
      <li>你好mylove89</li>
      <li>你好mylove90</li>
      <li>你好mylove91</li>
      <li>你好mylove92</li>
      <li>你好mylove93</li>
      <li>你好mylove94</li>
      <li>你好mylove95</li>
      <li>你好mylove96</li>
      <li>你好mylove97</li>
      <li>你好mylove98</li>
      <li>你好mylove99</li>
      <li>你好mylove100</li>
    </ul>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new Scroll(document.querySelector('.content'), {
        probeType: 0 | 1 | 2 | 3,
        pullUpLoad: true
      })
    }

  }
</script>

<style scoped>
  .content {
    height: 200px;
    background-color: red;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>