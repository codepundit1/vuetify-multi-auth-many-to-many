(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Paginator */ "./resources/js/Components/Paginator.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Authenticated: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginator: _Components_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["headers", "items", "filters", "indexRoute"],
  data: function data() {
    return {
      params: {
        search: this.filters.search ? this.filters.search : "",
        sortBy: this.filters.sortBy ? this.filters.sortBy : null,
        sortDesc: !!this.filters.sortDesc,
        perPage: this.filters.perPage ? parseInt(this.filters.perPage) : 10
      }
    };
  },
  watch: {
    params: {
      handler: function handler(value) {
        if (value.perPage !== parseInt(this.filters.perPage)) this.params.page = 1;else this.params.page = this.items.current_page;
        this.updateData();
      },
      deep: true
    },
    search: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(function (value) {
      this.params.search = value;
      this.updateData();
    }, 300)
  },
  methods: {
    updateData: function updateData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(_this.indexRoute, _this.params, {
                  preserveScroll: true,
                  preserveState: true,
                  replace: true
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show: true
    };
  },
  watch: {
    '$page.props.flash': {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    links: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_FlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/FlashMessage */ "./resources/js/Components/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    FlashMessage: _Components_FlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      group: null,
      drawer: true
    };
  },
  computed: {
    user: function user() {
      return this.$page.props.auth.user;
    },
    role: function role() {
      return this.$page.props.auth.user.roles[0].name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_FlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/FlashMessage */ "./resources/js/Components/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    FlashMessage: _Components_FlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  computed: {
    user: function user() {
      return this.$page.props.auth.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        password: ""
      }),
      show: null
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.route("password.confirm"), {
        onFinish: function onFinish() {
          return _this.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head
  },
  props: {
    status: String
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    submit: function submit() {
      this.form.post(this.route("password.email"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  data: function data() {
    return {
      show: false,
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.route("login"), {
        onFinish: function onFinish() {
          return _this.form.reset("password");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  data: function data() {
    return {
      show: false,
      confirmShow: false,
      form: this.$inertia.form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        address: ""
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.route("register"), {
        onFinish: function onFinish() {
          return _this.form.reset("password", "password_confirmation");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head
  },
  props: {
    email: String,
    token: String
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        token: this.token,
        email: this.email,
        password: "",
        password_confirmation: ""
      }),
      show: null,
      confirmShow: null
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.route("password.update"), {
        onFinish: function onFinish() {
          return _this.form.reset("password", "password_confirmation");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    status: String
  },
  data: function data() {
    return {
      form: this.$inertia.form()
    };
  },
  methods: {
    submit: function submit() {
      this.form.post(this.route("verification.send"));
    }
  },
  computed: {
    verificationLinkSent: function verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    client: Object,
    projects: Array,
    assigned: Array
  },
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    submit: function submit() {
      var formData = new FormData(document.getElementById('projectsForm'));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(this.route('clients.assign.projects', this.client), formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    client: Object,
    projects: Array
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.client ? this.client.name : '',
        projects: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      if (this.client) this.form.put(this.route('clients.update', this.client));else this.form.post(this.route('clients.store'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DataTable */ "./resources/js/Components/DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link,
    DataTable: _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['clients', 'filters'],
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Status',
        value: 'deleted_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      dialogDelete: false,
      itemId: ''
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.itemId = item.id;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.dialogDelete = false;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia["delete"](this.route('clients.force.delete', this.itemId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    client: Object,
    filters: String,
    projects: Array
  },
  data: function data() {
    return {
      itemId: ''
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    permission: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.permission ? this.permission.name : ''
      })
    };
  },
  methods: {
    submit: function submit() {
      if (this.permission) this.form.put(this.route('permissions.update', this.permission));else this.form.post(this.route('permissions.store'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DataTable */ "./resources/js/Components/DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link,
    DataTable: _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['permissions', 'filters'],
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Status',
        value: 'deleted_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      dialogDelete: false,
      itemId: ''
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.itemId = item.id;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.dialogDelete = false;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia["delete"](this.route('permissions.force.delete', this.itemId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    project: Object,
    clients: Array,
    assigned: Array
  },
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    submit: function submit() {
      var formData = new FormData(document.getElementById('clientsForm'));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(this.route('projects.assign.clients', this.project), formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    project: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.project ? this.project.name : '',
        starting_date: this.project ? this.project.starting_date : '',
        deadline: this.project ? this.project.deadline : ''
      })
    };
  },
  methods: {
    submit: function submit() {
      if (this.project) this.form.put(this.route('projects.update', this.project));else this.form.post(this.route('projects.store'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DataTable */ "./resources/js/Components/DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link,
    DataTable: _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['projects', 'filters'],
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Start Date',
        value: 'starting_date'
      }, {
        text: 'Deadline',
        value: 'deadline'
      }, {
        text: 'Status',
        value: 'deleted_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      dialogDelete: false,
      itemId: ''
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.itemId = item.id;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.dialogDelete = false;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia["delete"](this.route('projects.force.delete', this.itemId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    project: Object,
    filter: String,
    clients: Array
  },
  // props: ['projects', 'filters'],
  data: function data() {
    return {
      itemId: ''
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    role: Object,
    permissions: Array,
    assigned: Array
  },
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    submit: function submit() {
      var formData = new FormData(document.getElementById('permissionsForm'));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(this.route('roles.assign.permissions', this.role), formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    role: Object,
    permissions: Array
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.role ? this.role.name : '',
        permissions: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      if (this.role) this.form.put(this.route('roles.update', this.role));else this.form.post(this.route('roles.store'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DataTable */ "./resources/js/Components/DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link,
    DataTable: _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['roles', 'filters'],
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Status',
        value: 'deleted_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      dialogDelete: false,
      itemId: ''
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.itemId = item.id;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.dialogDelete = false;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia["delete"](this.route('roles.force.delete', this.itemId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_1__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: Object,
    roles: Array,
    assigned: Array
  },
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"],
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    submit: function submit() {
      var formData = new FormData(document.getElementById('rolesForm'));
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(this.route('users.assign.roles', this.user), formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link,
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  props: {
    user: Object,
    roles: Array
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.user ? this.user.name : '',
        email: this.user ? this.user.email : '',
        phone: this.user ? this.user.phone : '',
        address: this.user ? this.user.address : '',
        roles: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      if (this.user) this.form.put(this.route('users.update', this.user));else this.form.post(this.route('users.store'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DataTable */ "./resources/js/Components/DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    Admin: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link,
    DataTable: _Components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['users', 'filters'],
  data: function data() {
    return {
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Phone',
        value: 'phone'
      }, {
        text: 'Address',
        value: 'address'
      }, {
        text: 'Status',
        value: 'deleted_at'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      dialogDelete: false,
      itemId: ''
    };
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.dialogDelete = true;
      this.itemId = item.id;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.dialogDelete = false;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia["delete"](this.route('users.force.delete', this.itemId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Front */ "./resources/js/Layouts/Front.vue");
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Front: _Layouts_Front__WEBPACK_IMPORTED_MODULE_1__["default"],
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
var _window$document$getE;

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






var appName = ((_window$document$getE = window.document.getElementsByTagName('title')[0]) === null || _window$document$getE === void 0 ? void 0 : _window$document$getE.innerText) || 'Laravel';
(0,_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(_title, " - ").concat(appName);
  },
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        app = _ref.app,
        props = _ref.props,
        plugin = _ref.plugin;
    vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(plugin).mixin({
      methods: {
        route: route
      }
    }).use((vuetify__WEBPACK_IMPORTED_MODULE_4___default()));
    new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
      vuetify: new (vuetify__WEBPACK_IMPORTED_MODULE_4___default())({
        theme: {
          themes: {
            light: {
              primary: '#41b883',
              secondary: '#34495E',
              accent: '#1976D2',
              error: '#dc143c'
            }
          }
        }
      }),
      render: function render(h) {
        return h(app, props);
      }
    }).$mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__.InertiaProgress.init({
  color: '#41b883'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml {\n    overflow-y: auto\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml {\r\n    overflow-y: auto\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-btn[data-v-e59c811e] {\n\ttext-transform: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.px-5.py-5[data-v-d6261a26] {\n    pointer-events: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.px-5.py-5[data-v-b1e1a88e] {\n    pointer-events: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e59c811e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e59c811e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e59c811e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_d6261a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_d6261a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_d6261a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_b1e1a88e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_b1e1a88e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_b1e1a88e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/DataTable.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/DataTable.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=6930baee& */ "./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/Components/DataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/DataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/FlashMessage.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/FlashMessage.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=12c86242& */ "./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__.render,
  _FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/FlashMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Paginator.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/Paginator.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=4d98dc54& */ "./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54&");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js& */ "./resources/js/Components/Paginator.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__.render,
  _Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Paginator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Admin.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=eb3fb40a& */ "./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _Admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Front.vue":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Front.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Front.vue?vue&type=template&id=de9ff856& */ "./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856&");
/* harmony import */ var _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Front.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Front.vue?vue&type=script&lang=js&");
/* harmony import */ var _Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Front.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__.render,
  _Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Front.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AdminDashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/AdminDashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=a4050924& */ "./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AdminDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/ConfirmPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Auth/ConfirmPassword.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmPassword.vue?vue&type=template&id=475ae21d& */ "./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d&");
/* harmony import */ var _ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmPassword.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/ConfirmPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=2d73eca8& */ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=a2ac2cea& */ "./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e&scoped=true& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_e59c811e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& */ "./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e59c811e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=1da614ac& */ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=template&id=9f895776& */ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&");
/* harmony import */ var _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__.render,
  _VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/VerifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Clients/AssignProject.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Clients/AssignProject.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignProject.vue?vue&type=template&id=7793fbea& */ "./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea&");
/* harmony import */ var _AssignProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignProject.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Clients/AssignProject.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Clients/Form.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Clients/Form.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=754a2d98&scoped=true& */ "./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "754a2d98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Clients/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Clients/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Clients/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4ca27192& */ "./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Clients/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Clients/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Clients/Show.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=d6261a26&scoped=true& */ "./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _Show_vue_vue_type_style_index_0_id_d6261a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& */ "./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d6261a26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Clients/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/DesignerDashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/DesignerDashboard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesignerDashboard.vue?vue&type=template&id=79ba5de0& */ "./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0&");
/* harmony import */ var _DesignerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignerDashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesignerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__.render,
  _DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/DesignerDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Permissions/Form.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Permissions/Form.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=3113d5b8&scoped=true& */ "./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3113d5b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Permissions/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Permissions/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Permissions/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5807158e& */ "./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Permissions/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects/AssignClient.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Projects/AssignClient.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignClient.vue?vue&type=template&id=2820f054& */ "./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054&");
/* harmony import */ var _AssignClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignClient.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects/AssignClient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Projects/Form.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=5105bc00&scoped=true& */ "./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5105bc00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Projects/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7ec75246& */ "./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Projects/Show.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=b1e1a88e&scoped=true& */ "./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _Show_vue_vue_type_style_index_0_id_b1e1a88e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& */ "./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b1e1a88e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Roles/AssignPermission.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Roles/AssignPermission.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignPermission.vue?vue&type=template&id=15244b8e& */ "./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e&");
/* harmony import */ var _AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignPermission.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Roles/AssignPermission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Roles/Form.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Roles/Form.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=46478c5f&scoped=true& */ "./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "46478c5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Roles/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Roles/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Roles/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2d6b9872& */ "./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Roles/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/SuperAdminDashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/SuperAdminDashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuperAdminDashboard.vue?vue&type=template&id=24337b72& */ "./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72&");
/* harmony import */ var _SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperAdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__.render,
  _SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/SuperAdminDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/AssignRole.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Users/AssignRole.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignRole.vue?vue&type=template&id=71781f96& */ "./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96&");
/* harmony import */ var _AssignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignRole.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/AssignRole.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Form.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Users/Form.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=00a2dd18&scoped=true& */ "./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00a2dd18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5cc3d152& */ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=317d1a6e& */ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Welcome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/DataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/DataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Paginator.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Paginator.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paginator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Layouts/Admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Front.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Layouts/Front.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesignerDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignerDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignPermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuperAdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e59c811e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=style&index=0&id=e59c811e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_d6261a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=style&index=0&id=d6261a26&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_b1e1a88e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=style&index=0&id=b1e1a88e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_6930baee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTable.vue?vue&type=template&id=6930baee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee&");


/***/ }),

/***/ "./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_12c86242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FlashMessage.vue?vue&type=template&id=12c86242& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242&");


/***/ }),

/***/ "./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginator_vue_vue_type_template_id_4d98dc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Paginator.vue?vue&type=template&id=4d98dc54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54&");


/***/ }),

/***/ "./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&":
/*!***********************************************************************!*\
  !*** ./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=eb3fb40a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&");


/***/ }),

/***/ "./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856&":
/*!***********************************************************************!*\
  !*** ./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Front_vue_vue_type_template_id_de9ff856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Front.vue?vue&type=template&id=de9ff856& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856&");


/***/ }),

/***/ "./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_a4050924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=a4050924& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924&");


/***/ }),

/***/ "./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmPassword_vue_vue_type_template_id_475ae21d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmPassword.vue?vue&type=template&id=475ae21d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d&");


/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2d73eca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=2d73eca8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8&");


/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_a2ac2cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=a2ac2cea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea&");


/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_1da614ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=1da614ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&");


/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_9f895776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=template&id=9f895776& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&");


/***/ }),

/***/ "./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignProject_vue_vue_type_template_id_7793fbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignProject.vue?vue&type=template&id=7793fbea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea&");


/***/ }),

/***/ "./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_754a2d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=754a2d98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ca27192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4ca27192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192&");


/***/ }),

/***/ "./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_d6261a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=d6261a26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");


/***/ }),

/***/ "./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignerDashboard_vue_vue_type_template_id_79ba5de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesignerDashboard.vue?vue&type=template&id=79ba5de0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0&");


/***/ }),

/***/ "./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3113d5b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=3113d5b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5807158e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5807158e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e&");


/***/ }),

/***/ "./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignClient_vue_vue_type_template_id_2820f054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignClient.vue?vue&type=template&id=2820f054& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054&");


/***/ }),

/***/ "./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5105bc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=5105bc00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7ec75246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=7ec75246& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246&");


/***/ }),

/***/ "./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b1e1a88e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=b1e1a88e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignPermission_vue_vue_type_template_id_15244b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignPermission.vue?vue&type=template&id=15244b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e&");


/***/ }),

/***/ "./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_46478c5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=46478c5f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2d6b9872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=2d6b9872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872&");


/***/ }),

/***/ "./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminDashboard_vue_vue_type_template_id_24337b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuperAdminDashboard.vue?vue&type=template&id=24337b72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72&");


/***/ }),

/***/ "./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignRole_vue_vue_type_template_id_71781f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssignRole.vue?vue&type=template&id=71781f96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96&");


/***/ }),

/***/ "./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_00a2dd18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=00a2dd18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5cc3d152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");


/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=template&id=317d1a6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DataTable.vue?vue&type=template&id=6930baee& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "d-flex" },
        [
          _c(
            "h5",
            {
              staticClass:
                "text-h5 secondary--text text-uppercase font-weight-bold",
            },
            [_vm._t("title")],
            2
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "col-4 col-md-1 text-caption mr-1",
            attrs: {
              items: [5, 10, 15, 20, 25],
              dense: "",
              flat: "",
              "hide-details": "",
              prefix: "Per Page:",
              solo: "",
            },
            model: {
              value: _vm.params.perPage,
              callback: function ($$v) {
                _vm.$set(_vm.params, "perPage", $$v)
              },
              expression: "params.perPage",
            },
          }),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "col-5 col-md-3 col-lg-2",
            attrs: {
              dense: "",
              flat: "",
              "hide-details": "",
              label: "Search",
              "prepend-inner-icon": "mdi-magnify",
              solo: "",
            },
            model: {
              value: _vm.params.search,
              callback: function ($$v) {
                _vm.$set(_vm.params, "search", $$v)
              },
              expression: "params.search",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1 my-2",
        attrs: {
          headers: _vm.headers,
          items: _vm.items.data,
          "server-items-length": _vm.items.data.length,
          "sort-by": _vm.params.sortBy,
          "sort-desc": _vm.params.sortDesc,
          "hide-default-footer": "",
        },
        on: {
          "update:sortBy": function ($event) {
            return _vm.$set(_vm.params, "sortBy", $event)
          },
          "update:sort-by": function ($event) {
            return _vm.$set(_vm.params, "sortBy", $event)
          },
          "update:sortDesc": function ($event) {
            return _vm.$set(_vm.params, "sortDesc", $event)
          },
          "update:sort-desc": function ($event) {
            return _vm.$set(_vm.params, "sortDesc", $event)
          },
        },
        scopedSlots: _vm._u(
          [
            {
              key: "item.actions",
              fn: function (ref) {
                var item = ref.item
                return [_vm._t("default", null, { item: item })]
              },
            },
          ],
          null,
          true
        ),
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex" },
        [
          _c("Paginator", { attrs: { links: _vm.items.links } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm._t("create-button"),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/FlashMessage.vue?vue&type=template&id=12c86242& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$page.props.flash.success
        ? _c(
            "v-alert",
            {
              staticClass: "success--text",
              attrs: {
                border: "left",
                color: "success",
                "colored-border": "",
                dismissible: "",
              },
              model: {
                value: _vm.show,
                callback: function ($$v) {
                  _vm.show = $$v
                },
                expression: "show",
              },
            },
            [
              _vm._v(
                "\n        " + _vm._s(_vm.$page.props.flash.success) + "\n    "
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$page.props.flash.error
        ? _c(
            "v-alert",
            {
              staticClass: "error--text",
              attrs: {
                border: "left",
                color: "error",
                "colored-border": "",
                dismissible: "",
              },
              model: {
                value: _vm.show,
                callback: function ($$v) {
                  _vm.show = $$v
                },
                expression: "show",
              },
            },
            [
              _vm._v(
                "\n        " + _vm._s(_vm.$page.props.flash.error) + "\n    "
              ),
            ]
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Paginator.vue?vue&type=template&id=4d98dc54& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.links, function (link, index) {
      return _c(link.url ? "Link" : "span", {
        key: index,
        tag: "Component",
        staticClass: "px-1 black--text text-decoration-none",
        class: {
          "grey--text": !link.url,
          "primary--text font-weight-bold": link.active,
        },
        attrs: { href: link.url },
        domProps: { innerHTML: _vm._s(link.label) },
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-app-bar",
        { attrs: { app: "", color: "primary", dark: "", flat: "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function ($event) {
                _vm.drawer = !_vm.drawer
              },
            },
          }),
          _vm._v(" "),
          _c("v-toolbar-title", [
            _vm._v(
              _vm._s(_vm.$page.props.app ? _vm.$page.props.app.name : "Laravel")
            ),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-magnify")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                left: "",
                "offset-y": "",
                transition: "slide-y-transition",
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function (ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            { attrs: { icon: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_c("v-icon", [_vm._v("mdi-bell-outline")])],
                        1
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { dense: "" } },
                _vm._l(5, function (n) {
                  return _c(
                    "v-list-item",
                    { key: n, on: { click: function () {} } },
                    [_c("v-list-item-title", [_vm._v("Option " + _vm._s(n))])],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { "offset-y": "", transition: "slide-y-transition" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function (ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            {
                              staticStyle: { "text-transform": "none" },
                              attrs: { text: "" },
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.user.name) +
                              "\n                "
                          ),
                        ]
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    { on: { click: function () {} } },
                    [
                      _c("v-icon", { attrs: { left: "", small: "" } }, [
                        _vm._v("mdi-account\n                    "),
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Profile")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      attrs: {
                        href: _vm.route("logout"),
                        as: "v-list-item",
                        method: "post",
                        small: "",
                        text: "",
                      },
                    },
                    [
                      _c("v-icon", { attrs: { left: "", small: "" } }, [
                        _vm._v("mdi-power\n                    "),
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Logout")]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", color: "secondary", dark: "" },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list",
            { staticClass: "px-0", attrs: { dense: "", nav: "" } },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    { attrs: { left: "", size: "35" } },
                    [
                      _vm.user.avatar
                        ? _c("v-img", { attrs: { src: _vm.user.avatar } })
                        : _c("v-icon", { attrs: { large: "" } }, [
                            _vm._v("mdi-account-circle\n                    "),
                          ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [_vm._v(_vm._s(_vm.user.name))]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.role) +
                            "\n                    "
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                {
                  attrs: { "active-class": "primary" },
                  model: {
                    value: _vm.group,
                    callback: function ($$v) {
                      _vm.group = $$v
                    },
                    expression: "group",
                  },
                },
                [
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("dashboard") ? "primary" : "",
                      attrs: {
                        href: _vm.route("dashboard"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Dashboard")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("users.*") ? "primary" : "",
                      attrs: {
                        href: _vm.route("users.index"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-account-group")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Users")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("roles.*") ? "primary" : "",
                      attrs: {
                        href: _vm.route("roles.index"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-shield-account")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Roles")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("permissions.*")
                        ? "primary"
                        : "",
                      attrs: {
                        href: _vm.route("permissions.index"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-shield-half-full")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Permissions")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("projects.*") ? "primary" : "",
                      attrs: {
                        href: _vm.route("projects.index"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-shield-half-full")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Projects")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      class: _vm.route().current("clients.*") ? "primary" : "",
                      attrs: {
                        href: _vm.route("clients.index"),
                        as: "v-list-item",
                      },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-shield-half-full")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [_vm._v("Clients")]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "blue-grey lighten-5" },
        [
          _c(
            "v-container",
            { staticClass: "px-5 py-4", attrs: { fluid: "" } },
            [_c("flash-message"), _vm._v(" "), _vm._t("default")],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        {
          attrs: {
            absolute: "",
            app: "",
            color: "primary",
            dark: "",
            padless: "",
          },
        },
        [
          _c("v-col", { staticClass: "text-center", attrs: { cols: "12" } }, [
            _vm._v(
              "Copyright © " + _vm._s(_vm.$page.props.app.name) + "\n        "
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Front.vue?vue&type=template&id=de9ff856& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-app-bar",
        { attrs: { app: "", color: "white" } },
        [
          _c(
            "Link",
            { attrs: { href: _vm.route("welcome"), as: "v-btn", text: "" } },
            [
              _c("v-img", {
                attrs: {
                  contain: "",
                  "max-height": "40px",
                  "max-width": "40px",
                  src: "https://cdn.cdnlogo.com/logos/v/92/vue-js.svg",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.user
            ? _c(
                "Link",
                {
                  attrs: {
                    href: _vm.route("dashboard"),
                    as: "v-btn",
                    color: "primary",
                    text: "",
                  },
                },
                [_vm._v("\n            Dashboard\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.user
            ? _c(
                "Link",
                {
                  attrs: {
                    href: _vm.route("login"),
                    as: "v-btn",
                    color: "primary",
                    text: "",
                  },
                },
                [_vm._v("\n            Login\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.user
            ? _c(
                "Link",
                {
                  attrs: {
                    href: _vm.route("register"),
                    as: "v-btn",
                    color: "secondary",
                  },
                },
                [_vm._v("\n            Register\n        ")]
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "blue-grey lighten-5" },
        [
          _c(
            "v-container",
            { staticClass: "py-12" },
            [_c("flash-message"), _vm._v(" "), _vm._t("default")],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { app: "", outlined: "", padless: "" } },
        [
          _c("v-col", { staticClass: "text-center", attrs: { cols: "12" } }, [
            _vm._v(
              "Copyright © " + _vm._s(_vm.$page.props.app.name) + "\n        "
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AdminDashboard.vue?vue&type=template&id=a4050924& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Dashboard" } }),
      _vm._v(" "),
      _c("v-card", [_c("v-card-title", [_vm._v("Admin Dashboard")])], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ConfirmPassword.vue?vue&type=template&id=475ae21d& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Confirm Password" } }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c("v-card-subtitle", [
            _vm._v(
              "\n\t\t\tThis is a secure area of the application. Please confirm your password before continuing.\n\t\t"
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "my-4" },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password,
                      type: _vm.show ? "text" : "password",
                      dense: "",
                      label: "Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.show = !_vm.show
                      },
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        block: "",
                        color: "primary",
                        type: "submit",
                      },
                    },
                    [_vm._v("\n\t\t\t\t\tConfirm\n\t\t\t\t")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Forgot Password" } }),
      _vm._v(" "),
      _vm.status
        ? _c(
            "v-alert",
            {
              staticClass:
                "success--text mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
              attrs: { border: "left", color: "success", "colored-border": "" },
            },
            [_vm._v("\n\t\t" + _vm._s(_vm.status) + "\n\t")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c("v-card-subtitle", [
            _vm._v(
              "\n\t\t\tForgot your password? No problem. Just let us know your email address and we will email you a\n\t\t\tpassword reset link that will allow you to choose a new one.\n\t\t"
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.email,
                      autofocus: "",
                      dense: "",
                      label: "Email",
                      "prepend-inner-icon": "mdi-email",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        block: "",
                        color: "primary",
                        type: "submit",
                      },
                    },
                    [_vm._v("\n\t\t\t\t\tEmail Password Reset Link\n\t\t\t\t")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Login" } }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c("v-card-title", { staticClass: "text-h5 justify-center" }, [
            _vm._v("Login"),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "my-4" },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.email,
                      dense: "",
                      label: "Email",
                      "prepend-inner-icon": "mdi-email",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    staticClass: "mt-4",
                    attrs: {
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password,
                      type: _vm.show ? "text" : "password",
                      dense: "",
                      label: "Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.show = !_vm.show
                      },
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-md-flex align-center" },
                    [
                      _c("v-checkbox", {
                        attrs: { color: "primary", label: "Remember Me" },
                        model: {
                          value: _vm.form.remember,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "remember", $$v)
                          },
                          expression: "form.remember",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("password.request"),
                            color: "primary",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\tforgot your password?\n\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        disabled: _vm.form.processing,
                        block: "",
                        color: "primary",
                        type: "submit",
                      },
                    },
                    [_vm._v("\n\t\t\t\t\tSUBMIT\n\t\t\t\t")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Register" } }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c(
            "v-card-title",
            {
              staticClass: "text-h5 justify-center",
              attrs: { "secondary-title": "" },
            },
            [_vm._v("Register\n\t\t")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "my-4" },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      dense: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.phone,
                      dense: "",
                      label: "Phone",
                      "prepend-inner-icon": "mdi-phone",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.phone,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "phone", $$v)
                      },
                      expression: "form.phone",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.email,
                      dense: "",
                      label: "Email",
                      "prepend-inner-icon": "mdi-email",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password,
                      type: _vm.show ? "text" : "password",
                      dense: "",
                      label: "Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.show = !_vm.show
                      },
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.confirmShow
                        ? "mdi-eye"
                        : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password_confirmation,
                      type: _vm.confirmShow ? "text" : "password",
                      dense: "",
                      label: "Confirm Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.confirmShow = !_vm.confirmShow
                      },
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      "error-messages": _vm.form.errors.address,
                      dense: "",
                      label: "Address",
                      "no-resize": "",
                      "prepend-inner-icon": "mdi-map-marker",
                      rows: "2",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.address,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        block: "",
                        color: "primary",
                        type: "submit",
                      },
                    },
                    [_vm._v("\n\t\t\t\t\tSUBMIT\n\t\t\t\t")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mx-4", attrs: { width: "full" } }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "mt-4 mx-2" },
            [
              _c(
                "Link",
                {
                  attrs: {
                    href: _vm.route("login"),
                    as: "v-btn",
                    block: "",
                    color: "red",
                    method: "post",
                    outlined: "",
                    rounded: "",
                  },
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-google")]),
                  _vm._v("\n\t\t\tSign Up with Google\n\t\t\t"),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "mx-2 mb-4" },
            [
              _c(
                "Link",
                {
                  staticClass: "text-normal",
                  attrs: {
                    href: _vm.route("login"),
                    as: "v-btn",
                    block: "",
                    color: "blue",
                    method: "post",
                    outlined: "",
                    rounded: "",
                  },
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-facebook"),
                  ]),
                  _vm._v("\n\t\t\tSign Up with Facebook\n\t\t\t"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Reset Password" } }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c(
            "v-card-title",
            {
              staticClass: "text-h5 justify-center",
              attrs: { "secondary-title": "" },
            },
            [_vm._v("Reset Password\n\t\t")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "my-4" },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.email,
                      autofocus: "",
                      dense: "",
                      label: "Email",
                      "prepend-inner-icon": "mdi-email",
                      "solo-inverted": "",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password,
                      type: _vm.show ? "text" : "password",
                      dense: "",
                      label: "Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.show = !_vm.show
                      },
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": _vm.confirmShow
                        ? "mdi-eye"
                        : "mdi-eye-off",
                      "error-messages": _vm.form.errors.password_confirmation,
                      type: _vm.confirmShow ? "text" : "password",
                      dense: "",
                      label: "Confirm Password",
                      "prepend-inner-icon": "mdi-lock",
                      "solo-inverted": "",
                    },
                    on: {
                      "click:append": function ($event) {
                        _vm.confirmShow = !_vm.confirmShow
                      },
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.form.processing,
                        block: "",
                        color: "primary",
                        type: "submit",
                      },
                    },
                    [_vm._v("\n\t\t\t\t\tReset Password\n\t\t\t\t")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c("Head", { attrs: { title: "Email Verification" } }),
      _vm._v(" "),
      _vm.verificationLinkSent
        ? _c(
            "v-alert",
            {
              staticClass:
                "success--text mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
              attrs: { border: "left", color: "success", "colored-border": "" },
            },
            [
              _vm._v(
                "\n\t\tA new verification link has been sent to the email address you provided during registration.\n\t"
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mx-auto col-12 col-sm-8 col-md-4 col-xl-3",
          attrs: { color: "secondary", dark: "" },
        },
        [
          _c("v-card-subtitle", { staticClass: "mb-4 text-sm text-gray-600" }, [
            _vm._v(
              "\n\t\t\tThanks for signing up! Before getting started, could you verify your email address by clicking on the\n\t\t\tlink\n\t\t\twe just emailed to you? If you didn't receive the email, we will gladly send you another.\n\t\t"
            ),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.submit.apply(null, arguments)
                  },
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "d-flex align-center" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          disabled: _vm.form.processing,
                          color: "primary",
                          type: "submit",
                        },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\tResend Verification Email\n\t\t\t\t\t"
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "Link",
                      {
                        attrs: {
                          href: _vm.route("logout"),
                          as: "v-btn",
                          color: "primary",
                          method: "post",
                          small: "",
                          text: "",
                        },
                      },
                      [_vm._v("\n\t\t\t\t\tLog Out\n\t\t\t\t\t")]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/AssignProject.vue?vue&type=template&id=7793fbea& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Clients" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-6 mx-auto" },
        [
          _c(
            "v-card-title",
            { staticClass: "text-h5 secondary--text justify-center" },
            [_vm._v("Under " + _vm._s(_vm.client.name) + " - Assign Project")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("h4", { staticClass: "text-h6 mb-4" }, [
                _vm._v("Project List"),
              ]),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  attrs: { id: "projectsForm" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._l(_vm.projects, function (client) {
                    return _c("div", { key: client.id }, [
                      _c("label", { staticClass: "text-subtitle-1" }, [
                        _c("input", {
                          staticClass: "primary--text",
                          attrs: { name: "projects[]", type: "checkbox" },
                          domProps: {
                            checked: _vm.assigned.some(function (current) {
                              return current.id === client.id
                            }),
                            value: client.id,
                          },
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(client.name) +
                            "\n                    "
                        ),
                      ]),
                    ])
                  }),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("clients.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary ml-1",
                          attrs: { type: "submit" },
                        },
                        [
                          _vm._v(
                            "\n                        Assign\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Form.vue?vue&type=template&id=754a2d98&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Clients" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-6 mx-auto" },
        [
          _c("v-card-title", {
            staticClass: "text-h5 justify-center secondary--text",
            domProps: {
              textContent: _vm._s(_vm.client ? "Edit Client" : "Create Client"),
            },
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      autofocus: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.projects,
                        expression: "projects",
                      },
                    ],
                    attrs: {
                      "error-messages": _vm.form.errors.projects,
                      items: _vm.projects,
                      chips: "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Projects",
                      multiple: "",
                      "prepend-inner-icon": "mdi-shield-half-full",
                    },
                    model: {
                      value: _vm.form.projects,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "projects", $$v)
                      },
                      expression: "form.projects",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("clients.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: {
                            disabled: _vm.form.processing,
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        submit\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Index.vue?vue&type=template&id=4ca27192& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Clients" } }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          filters: _vm.filters,
          headers: _vm.headers,
          "index-route": this.route("clients.index"),
          items: _vm.clients,
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [_vm._v("clients")]
            },
            proxy: true,
          },
          {
            key: "default",
            fn: function (slotProp) {
              return [
                slotProp.item.deleted_at === "Active"
                  ? _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "clients.assign.projects.form",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "black",
                              icon: "",
                              small: "",
                              title: "projects",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-shield-half-full"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("clients.show", slotProp.item),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-eye"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("clients.edit", slotProp.item),
                              as: "v-btn",
                              color: "accent",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-pencil"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("clients.destroy", slotProp.item),
                              as: "v-btn",
                              color: "warning",
                              icon: "",
                              method: "delete",
                              small: "",
                              title: "delete",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-delete"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("clients.restore", slotProp.item),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              method: "post",
                              small: "",
                              title: "restore",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-recycle"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "error",
                              icon: "",
                              small: "",
                              title: "force-delete",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteItem(slotProp.item)
                              },
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                        mdi-delete\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
          },
          {
            key: "create-button",
            fn: function () {
              return [
                _c(
                  "Link",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      href: _vm.route("clients.create"),
                      as: "v-btn",
                      color: "primary",
                    },
                  },
                  [_vm._v("\n                Create\n            ")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v("Are you sure you want to delete this item?"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "accent", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialogDelete = !_vm.dialogDelete
                        },
                      },
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteItemConfirm },
                    },
                    [_vm._v("Confirm\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Clients/Show.vue?vue&type=template&id=d6261a26&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Projects" } }),
      _vm._v(" "),
      _c("v-simple-table", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function () {
              return [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("\n          Client Information\n        "),
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n          Assigned Project Information\n        "
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "px-5 py-5" }, [
                      _vm._v(
                        "\n              Client Name: " +
                          _vm._s(_vm.client.name)
                      ),
                      _c("br"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "px-5 py-5" },
                      _vm._l(_vm.client.projects, function (project) {
                        return _c("p", { key: project.id }, [
                          _vm._v(
                            "\n              Project Name: " +
                              _vm._s(project.name)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n              Start Date: " +
                              _vm._s(project.starting_date)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n              Deadline: " +
                              _vm._s(project.deadline)
                          ),
                          _c("br"),
                        ])
                      }),
                      0
                    ),
                  ]),
                ]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Dashboard" } }),
      _vm._v(" "),
      _c("v-card", [_c("v-card-title", [_vm._v("Dashboard")])], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DesignerDashboard.vue?vue&type=template&id=79ba5de0& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Dashboard" } }),
      _vm._v(" "),
      _c("v-card", [_c("v-card-title", [_vm._v("Designer Dashboard")])], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Form.vue?vue&type=template&id=3113d5b8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Permissions" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-3 mx-auto" },
        [
          _c("v-card-title", {
            staticClass: "text-h5 justify-center secondary--text",
            domProps: {
              textContent: _vm._s(
                _vm.permission ? "Edit Permission" : "Create Permission"
              ),
            },
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      autofocus: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("permissions.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: {
                            disabled: _vm.form.processing,
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        submit\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Permissions/Index.vue?vue&type=template&id=5807158e& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Permissions" } }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          filters: _vm.filters,
          headers: _vm.headers,
          "index-route": this.route("permissions.index"),
          items: _vm.permissions,
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [_vm._v("Permissions")]
            },
            proxy: true,
          },
          {
            key: "default",
            fn: function (slotProp) {
              return [
                slotProp.item.deleted_at === "Active"
                  ? _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "permissions.edit",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "accent",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-pencil"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "permissions.destroy",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "warning",
                              icon: "",
                              method: "delete",
                              small: "",
                              title: "delete",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-delete"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "permissions.restore",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              method: "post",
                              small: "",
                              title: "restore",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-recycle"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "error",
                              icon: "",
                              small: "",
                              title: "force-delete",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteItem(slotProp.item)
                              },
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                        mdi-delete\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
          },
          {
            key: "create-button",
            fn: function () {
              return [
                _c(
                  "Link",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      href: _vm.route("permissions.create"),
                      as: "v-btn",
                      color: "primary",
                    },
                  },
                  [_vm._v("\n                Create\n            ")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v("Are you sure you want to delete this item?"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "accent", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialogDelete = !_vm.dialogDelete
                        },
                      },
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteItemConfirm },
                    },
                    [_vm._v("Confirm\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/AssignClient.vue?vue&type=template&id=2820f054& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Projects" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-6 mx-auto" },
        [
          _c(
            "v-card-title",
            { staticClass: "text-h5 secondary--text justify-center" },
            [_vm._v(_vm._s(_vm.project.name) + " - Assign Client")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("h4", { staticClass: "text-h6 mb-4" }, [
                _vm._v("Client List"),
              ]),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  attrs: { id: "clientsForm" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._l(_vm.clients, function (project) {
                    return _c("div", { key: project.id }, [
                      _c("label", { staticClass: "text-subtitle-1" }, [
                        _c("input", {
                          staticClass: "primary--text",
                          attrs: { name: "clients[]", type: "checkbox" },
                          domProps: {
                            checked: _vm.assigned.some(function (current) {
                              return current.id === project.id
                            }),
                            value: project.id,
                          },
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(project.name) +
                            "\n                    "
                        ),
                      ]),
                    ])
                  }),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("projects.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary ml-1",
                          attrs: { type: "submit" },
                        },
                        [
                          _vm._v(
                            "\n                        Assign\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Form.vue?vue&type=template&id=5105bc00&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Projects" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-6 mx-auto" },
        [
          _c("v-card-title", {
            staticClass: "text-h5 justify-center secondary--text",
            domProps: {
              textContent: _vm._s(
                _vm.project ? "Edit Project" : "Create Project"
              ),
            },
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      autofocus: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.starting_date,
                      dense: "",
                      label: "Starting Date",
                      type: "date",
                      "prepend-inner-icon": "mdi-calendar",
                    },
                    model: {
                      value: _vm.form.starting_date,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "starting_date", $$v)
                      },
                      expression: "form.starting_date",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.deadline,
                      dense: "",
                      label: "Deadline",
                      type: "date",
                      "prepend-inner-icon": "mdi-calendar",
                    },
                    model: {
                      value: _vm.form.deadline,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "deadline", $$v)
                      },
                      expression: "form.deadline",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("projects.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: {
                            disabled: _vm.form.processing,
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        submit\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Index.vue?vue&type=template&id=7ec75246& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Projects" } }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          filters: _vm.filters,
          headers: _vm.headers,
          "index-route": this.route("projects.index"),
          items: _vm.projects,
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [_vm._v("projects")]
            },
            proxy: true,
          },
          {
            key: "default",
            fn: function (slotProp) {
              return [
                slotProp.item.deleted_at === "Active"
                  ? _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "projects.assign.clients.form",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "black",
                              icon: "",
                              small: "",
                              title: "projects",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-shield-half-full"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("projects.show", slotProp.item),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-eye"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("projects.edit", slotProp.item),
                              as: "v-btn",
                              color: "accent",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-pencil"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "projects.destroy",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "warning",
                              icon: "",
                              method: "delete",
                              small: "",
                              title: "delete",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-delete"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "projects.restore",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              method: "post",
                              small: "",
                              title: "restore",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-recycle"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "error",
                              icon: "",
                              small: "",
                              title: "force-delete",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteItem(slotProp.item)
                              },
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                        mdi-delete\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
          },
          {
            key: "create-button",
            fn: function () {
              return [
                _c(
                  "Link",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      href: _vm.route("projects.create"),
                      as: "v-btn",
                      color: "primary",
                    },
                  },
                  [_vm._v("\n                Create\n            ")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v("Are you sure you want to delete this item?"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "accent", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialogDelete = !_vm.dialogDelete
                        },
                      },
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteItemConfirm },
                    },
                    [_vm._v("Confirm\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Projects/Show.vue?vue&type=template&id=b1e1a88e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Projects" } }),
      _vm._v(" "),
      _c("v-simple-table", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function () {
              return [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("\n          Project Information\n        "),
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n          Assigned Client Information\n        "
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "px-5 py-5" }, [
                      _vm._v(
                        "\n              Project Name: " +
                          _vm._s(_vm.project.name)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n              Project Start Date: " +
                          _vm._s(_vm.project.starting_date)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n              Project Start Date: " +
                          _vm._s(_vm.project.deadline)
                      ),
                      _c("br"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "px-5 py-5" },
                      _vm._l(_vm.project.clients, function (client) {
                        return _c("p", { key: client.id }, [
                          _vm._v("\n              " + _vm._s(client.name)),
                          _c("br"),
                        ])
                      }),
                      0
                    ),
                  ]),
                ]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/AssignPermission.vue?vue&type=template&id=15244b8e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Roles" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-4 col-lg-3 mx-auto" },
        [
          _c(
            "v-card-title",
            { staticClass: "text-h5 secondary--text justify-center" },
            [_vm._v(_vm._s(_vm.role.name) + " - Assign Roles")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("h4", { staticClass: "text-h6 mb-4" }, [_vm._v("Roles")]),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  attrs: { id: "permissionsForm" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._l(_vm.permissions, function (role) {
                    return _c("div", { key: role.id }, [
                      _c("label", { staticClass: "text-subtitle-1" }, [
                        _c("input", {
                          staticClass: "primary--text",
                          attrs: { name: "permissions[]", type: "checkbox" },
                          domProps: {
                            checked: _vm.assigned.some(function (current) {
                              return current.id === role.id
                            }),
                            value: role.id,
                          },
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(role.name) +
                            "\n                    "
                        ),
                      ]),
                    ])
                  }),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("roles.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary ml-1",
                          attrs: { type: "submit" },
                        },
                        [
                          _vm._v(
                            "\n                        Assign\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Form.vue?vue&type=template&id=46478c5f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Roles" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-3 mx-auto" },
        [
          _c("v-card-title", {
            staticClass: "text-h5 justify-center secondary--text",
            domProps: {
              textContent: _vm._s(_vm.role ? "Edit Role" : "Create Role"),
            },
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      autofocus: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.permissions,
                        expression: "permissions",
                      },
                    ],
                    attrs: {
                      "error-messages": _vm.form.errors.permissions,
                      items: _vm.permissions,
                      chips: "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Permissions",
                      multiple: "",
                      "prepend-inner-icon": "mdi-shield-half-full",
                    },
                    model: {
                      value: _vm.form.permissions,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "permissions", $$v)
                      },
                      expression: "form.permissions",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("roles.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: {
                            disabled: _vm.form.processing,
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        submit\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Roles/Index.vue?vue&type=template&id=2d6b9872& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Roles" } }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          filters: _vm.filters,
          headers: _vm.headers,
          "index-route": this.route("roles.index"),
          items: _vm.roles,
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [_vm._v("Roles")]
            },
            proxy: true,
          },
          {
            key: "default",
            fn: function (slotProp) {
              return [
                slotProp.item.deleted_at === "Active"
                  ? _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "roles.assign.permissions.form",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "black",
                              icon: "",
                              small: "",
                              title: "permissions",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-shield-half-full"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("roles.edit", slotProp.item),
                              as: "v-btn",
                              color: "accent",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-pencil"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("roles.destroy", slotProp.item),
                              as: "v-btn",
                              color: "warning",
                              icon: "",
                              method: "delete",
                              small: "",
                              title: "delete",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-delete"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("roles.restore", slotProp.item),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              method: "post",
                              small: "",
                              title: "restore",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-recycle"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "error",
                              icon: "",
                              small: "",
                              title: "force-delete",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteItem(slotProp.item)
                              },
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                        mdi-delete\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
          },
          {
            key: "create-button",
            fn: function () {
              return [
                _c(
                  "Link",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      href: _vm.route("roles.create"),
                      as: "v-btn",
                      color: "primary",
                    },
                  },
                  [_vm._v("\n                Create\n            ")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v("Are you sure you want to delete this item?"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "accent", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialogDelete = !_vm.dialogDelete
                        },
                      },
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteItemConfirm },
                    },
                    [_vm._v("Confirm\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SuperAdminDashboard.vue?vue&type=template&id=24337b72& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Dashboard" } }),
      _vm._v(" "),
      _c("v-card", [_c("v-card-title", [_vm._v("Super Admin Dashboard")])], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/AssignRole.vue?vue&type=template&id=71781f96& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Users" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-4 col-lg-3 mx-auto" },
        [
          _c(
            "v-card-title",
            { staticClass: "text-h5 secondary--text justify-center" },
            [_vm._v(_vm._s(_vm.user.name) + " - Assign Roles")]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("h4", { staticClass: "text-h6 mb-4" }, [_vm._v("Roles")]),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  attrs: { id: "rolesForm" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._l(_vm.roles, function (role) {
                    return _c("div", { key: role.id }, [
                      _c("label", { staticClass: "text-subtitle-1" }, [
                        _c("input", {
                          staticClass: "primary--text",
                          attrs: { name: "roles[]", type: "checkbox" },
                          domProps: {
                            checked: _vm.assigned.some(function (current) {
                              return current.id === role.id
                            }),
                            value: role.id,
                          },
                        }),
                        _vm._v(
                          "\n                        " +
                            _vm._s(role.name) +
                            "\n                    "
                        ),
                      ]),
                    ])
                  }),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "my-4" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("users.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary ml-1",
                          attrs: { type: "submit" },
                        },
                        [
                          _vm._v(
                            "\n                        Assign\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Form.vue?vue&type=template&id=00a2dd18&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Users" } }),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "col-12 col-md-3 mx-auto" },
        [
          _c("v-card-title", {
            staticClass: "text-h5 justify-center secondary--text",
            domProps: {
              textContent: _vm._s(_vm.user ? "Edit User" : "Create User"),
            },
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.name,
                      autofocus: "",
                      label: "Name",
                      "prepend-inner-icon": "mdi-account",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.email,
                      label: "Email",
                      "prepend-inner-icon": "mdi-email",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.form.errors.phone,
                      label: "Phone",
                      "prepend-inner-icon": "mdi-phone",
                    },
                    model: {
                      value: _vm.form.phone,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "phone", $$v)
                      },
                      expression: "form.phone",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      "error-messages": _vm.form.errors.address,
                      label: "Address",
                      "no-resize": "",
                      "prepend-inner-icon": "mdi-map-marker",
                      rows: "2",
                    },
                    model: {
                      value: _vm.form.address,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.roles,
                        expression: "roles",
                      },
                    ],
                    attrs: {
                      "error-messages": _vm.form.errors.roles,
                      items: _vm.roles,
                      chips: "",
                      "item-text": "name",
                      "item-value": "id",
                      label: "Roles",
                      multiple: "",
                      "prepend-inner-icon": "mdi-shield-account",
                    },
                    model: {
                      value: _vm.form.roles,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "roles", $$v)
                      },
                      expression: "form.roles",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "Link",
                        {
                          attrs: {
                            href: _vm.route("users.index"),
                            as: "v-btn",
                            color: "secondary",
                          },
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: {
                            disabled: _vm.form.processing,
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [
                          _vm._v(
                            "\n                        submit\n                    "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Admin",
    [
      _c("Head", { attrs: { title: "Users" } }),
      _vm._v(" "),
      _c("data-table", {
        attrs: {
          filters: _vm.filters,
          headers: _vm.headers,
          "index-route": this.route("users.index"),
          items: _vm.users,
          multiple: "roles",
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [_vm._v("Users")]
            },
            proxy: true,
          },
          {
            key: "default",
            fn: function (slotProp) {
              return [
                slotProp.item.deleted_at === "Active"
                  ? _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route(
                                "users.assign.roles.form",
                                slotProp.item
                              ),
                              as: "v-btn",
                              color: "black",
                              icon: "",
                              small: "",
                              title: "roles",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-shield-account"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("users.edit", slotProp.item),
                              as: "v-btn",
                              color: "accent",
                              icon: "",
                              small: "",
                              title: "edit",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-pencil"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("users.destroy", slotProp.item),
                              as: "v-btn",
                              color: "warning",
                              icon: "",
                              method: "delete",
                              small: "",
                              title: "delete",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-delete"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "Link",
                          {
                            attrs: {
                              href: _vm.route("users.restore", slotProp.item),
                              as: "v-btn",
                              color: "success",
                              icon: "",
                              method: "post",
                              small: "",
                              title: "restore",
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v("mdi-recycle"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "error",
                              icon: "",
                              small: "",
                              title: "force-delete",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.deleteItem(slotProp.item)
                              },
                            },
                          },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                        mdi-delete\n                    "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
          },
          {
            key: "create-button",
            fn: function () {
              return [
                _c(
                  "Link",
                  {
                    staticClass: "flex-column",
                    attrs: {
                      href: _vm.route("users.create"),
                      as: "v-btn",
                      color: "primary",
                    },
                  },
                  [_vm._v("\n                Create\n            ")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialogDelete,
            callback: function ($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v("Are you sure you want to delete this item?"),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "accent", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialogDelete = !_vm.dialogDelete
                        },
                      },
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteItemConfirm },
                    },
                    [_vm._v("Confirm\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Front",
    [
      _c(
        "v-container",
        [_c("v-card", [_c("v-card-title", [_vm._v("Welcome")])], 1)],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*\\.vue$":
/*!************************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*\.vue$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AdminDashboard.vue": "./resources/js/Pages/AdminDashboard.vue",
	"./Auth/ConfirmPassword.vue": "./resources/js/Pages/Auth/ConfirmPassword.vue",
	"./Auth/ForgotPassword.vue": "./resources/js/Pages/Auth/ForgotPassword.vue",
	"./Auth/Login.vue": "./resources/js/Pages/Auth/Login.vue",
	"./Auth/Register.vue": "./resources/js/Pages/Auth/Register.vue",
	"./Auth/ResetPassword.vue": "./resources/js/Pages/Auth/ResetPassword.vue",
	"./Auth/VerifyEmail.vue": "./resources/js/Pages/Auth/VerifyEmail.vue",
	"./Clients/AssignProject.vue": "./resources/js/Pages/Clients/AssignProject.vue",
	"./Clients/Form.vue": "./resources/js/Pages/Clients/Form.vue",
	"./Clients/Index.vue": "./resources/js/Pages/Clients/Index.vue",
	"./Clients/Show.vue": "./resources/js/Pages/Clients/Show.vue",
	"./Dashboard.vue": "./resources/js/Pages/Dashboard.vue",
	"./DesignerDashboard.vue": "./resources/js/Pages/DesignerDashboard.vue",
	"./Permissions/Form.vue": "./resources/js/Pages/Permissions/Form.vue",
	"./Permissions/Index.vue": "./resources/js/Pages/Permissions/Index.vue",
	"./Projects/AssignClient.vue": "./resources/js/Pages/Projects/AssignClient.vue",
	"./Projects/Form.vue": "./resources/js/Pages/Projects/Form.vue",
	"./Projects/Index.vue": "./resources/js/Pages/Projects/Index.vue",
	"./Projects/Show.vue": "./resources/js/Pages/Projects/Show.vue",
	"./Roles/AssignPermission.vue": "./resources/js/Pages/Roles/AssignPermission.vue",
	"./Roles/Form.vue": "./resources/js/Pages/Roles/Form.vue",
	"./Roles/Index.vue": "./resources/js/Pages/Roles/Index.vue",
	"./SuperAdminDashboard.vue": "./resources/js/Pages/SuperAdminDashboard.vue",
	"./Users/AssignRole.vue": "./resources/js/Pages/Users/AssignRole.vue",
	"./Users/Form.vue": "./resources/js/Pages/Users/Form.vue",
	"./Users/Index.vue": "./resources/js/Pages/Users/Index.vue",
	"./Welcome.vue": "./resources/js/Pages/Welcome.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*\\.vue$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);