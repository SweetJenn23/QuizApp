webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_quiz_component__ = __webpack_require__("./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_high_scores_high_scores_component__ = __webpack_require__("./src/app/components/high-scores/high-scores.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'high-scores', component: __WEBPACK_IMPORTED_MODULE_5__components_high_scores_high_scores_component__["a" /* HighScoresComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

var appRoutingProviders = [];
var appRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_quiz_quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quiz_quiz_component__ = __webpack_require__("./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_quiz_timer_timer_component__ = __webpack_require__("./src/app/components/quiz/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quiz_questions_answers_questions_answers_component__ = __webpack_require__("./src/app/components/quiz/questions-answers/questions-answers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_quiz_results_results_component__ = __webpack_require__("./src/app/components/quiz/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_high_scores_high_scores_component__ = __webpack_require__("./src/app/components/high-scores/high-scores.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routing

// Service

// Components







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_quiz_timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_quiz_questions_answers_questions_answers_component__["a" /* QuestionsAnswersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_quiz_results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_high_scores_high_scores_component__["a" /* HighScoresComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["b" /* appRouting */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_routing_module__["c" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_5__components_quiz_quiz_service__["a" /* QuizService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/high-scores/high-scores.component.css":
/***/ (function(module, exports) {

module.exports = ".high-scores {\n    padding: 1rem 2rem 2rem;\n}\n.high-scores ul {\n    padding: 0;\n}\n.btn-home {\n    max-width: 50%;\n}\nli.result {\n    list-style: none;\n    border-bottom: 1px solid #eee;\n    padding: 0.5rem 0;\n    font-size: 1.4rem;\n}\n.name, .score, .date {\n    width: 32%;\n    display: inline-block;\n}\n.score-index {\n    float: left\n}\n.score {\n    font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/components/high-scores/high-scores.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container high-scores text-center\">\n  <h1>Top 10 Scores</h1>\n  <ul *ngIf=\"highScores\">\n    <li *ngFor=\"let score of highScores | slice: 0:10;  let i = index\" class=\"result\">\n      <span class=\"name\">\n        <span class=\"score-index\">{{ i + 1 }}.</span>{{ score.name }}\n      </span>\n      <span class=\"score\">{{ score.score }}%</span>\n      <span class=\"date\">{{ score.date | date }}</span>\n    </li>\n  </ul>\n  <div>\n    <button class=\"btn-primary btn-home\" routerLink=\"/\">Back to Home</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/high-scores/high-scores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighScoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var HighScoresComponent = (function () {
    function HighScoresComponent(_quizService) {
        this._quizService = _quizService;
    }
    HighScoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get High Scores
        this._quizService.getHighScores().subscribe(function (highScores) {
            // Sort Scores Descending
            highScores.results.sort(function (score1, score2) {
                if (score1.score > score2.score) {
                    return -1;
                }
                else if (score1.score < score2.score) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.highScores = highScores.results;
        }, 
        // error
        function (err) {
            console.log(err);
            return false;
        });
    };
    return HighScoresComponent;
}());
HighScoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-high-scores',
        template: __webpack_require__("./src/app/components/high-scores/high-scores.component.html"),
        styles: [__webpack_require__("./src/app/components/high-scores/high-scores.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], HighScoresComponent);

var _a;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/high-scores.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home {\n    padding: 2rem 0;\n}\n.btn-start,\n.btn-scores {\n    max-width: 80%;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h1>Simple M.E.A.N. Quiz</h1>\n</div>\n<div class=\"home inner-container text-center\">\n    <h2 class=\"title\">Do you think you are smart enough?</h2>\n    <p>Let's find out. Click the Start Quiz button below to start the quiz.</p>\n    <p>You will have 1 minute to answer 10 questions.</p>\n    <button class=\"btn-start btn-primary\" routerLink=\"/quiz\">START QUIZ</button>\n    <button class=\"btn-scores btn-primary\" routerLink=\"/high-scores\">HIGH SCORES</button>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/quiz/questions-answers/questions-answers.component.css":
/***/ (function(module, exports) {

module.exports = ".question-index {\n    padding-bottom: 1rem;\n}\n.question {\n    font-size: 1.25rem;\n    border: 1px solid #666;\n    border-radius: 6px;\n    padding: 1rem;\n    margin: 0 0 1rem 0;\n    background: #fafafa;\n}\n.option {\n    padding: 10px 20px;\n    margin: 5px 0px;\n    cursor: pointer;\n    border: 1px solid #999;\n    border-radius: 6px;\n    background: #fff;\n}\n.option:hover {\n    background: #eee;\n}\n.option.active {\n    background: #34a9ce;\n    color: #fff;\n    font-weight: bold;\n}\n.navigation {\n    margin-top: 1rem;\n}\n.finish-quiz {\n    font-weight: bold;\n}\n.modal-container {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(255,255,255,0.7);\n}\n.modal {\n    position: absolute;\n    width: 50%;\n    min-width: 320px;\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    padding: 2rem 0;\n    background: #fff;\n    border: 1px solid #eee;\n    border-radius: 6px;\n}\n.modal-title {\n    font-size: 2rem;\n    margin-top: 0;\n}\n.check-results {\n    margin-top: 1rem;\n}"

/***/ }),

/***/ "./src/app/components/quiz/questions-answers/questions-answers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let quiz of _quiz | slice:(questionIndex-1):questionIndex\">\n  <div class=\"question-index\">Question {{ questionIndex }} / {{ _quiz.length }}</div>\n  <p class=\"question\">{{ quiz.question }}</p>\n  <div [class]=\"'option option-' + i\" *ngFor=\"let option of quiz.options; let i = index\" (click)=\"selected(elem)\" #elem>{{ option }}</div>\n</div>\n\n<div class=\"navigation\">\n  <button *ngIf=\"questionIndex < _quiz?.length\" class=\"btn-primary\" (click)=\"nextQuestion()\">Next Question</button>\n  <button *ngIf=\"questionIndex > (_quiz?.length - 1)\" class=\"finish-quiz btn-primary\" (click)=\"nextQuestion()\">Finish Quiz</button>\n</div>\n\n<div *ngIf=\"secLeft < 1\" class=\"modal-container\">\n  <div class=\"modal text-center\">\n    <p class=\"modal-title\">Time's up!</p>\n    <p>Click on the button below to check your result.</p>\n    <button class=\"btn-primary check-results\" (click)=\"nextQuestion()\">Check Your Result</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/quiz/questions-answers/questions-answers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsAnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var QuestionsAnswersComponent = (function () {
    function QuestionsAnswersComponent(_quizService) {
        this._quizService = _quizService;
        this.questionIndex = 1;
        this.selectedOptions = [];
        this.activeOptions = document.getElementsByClassName('active');
        this.quizScore = 0;
        this.secLeft = this._quizService.time;
    }
    // selected options
    QuestionsAnswersComponent.prototype.selected = function (elem) {
        elem.classList.toggle('active');
        this.selectedOptions.length = 0;
        for (var i = 0; i < this.activeOptions.length; i++) {
            this.selectedOptions.push(this.activeOptions[i].innerHTML);
        }
    };
    // next question function
    QuestionsAnswersComponent.prototype.nextQuestion = function () {
        if (this.questionIndex <= this._quiz.length) {
            for (var i = this.questionIndex - 1; i < this.questionIndex; i++) {
                var selectedAnswers = String(this.selectedOptions);
                var correctAnswer = String(this._quiz[i].answer);
                if (selectedAnswers === correctAnswer) {
                    this.quizScore++;
                }
                if (this.questionIndex === this._quiz.length) {
                    this.calculateScore();
                }
            }
            this.questionIndex++;
            this.selectedOptions.length = 0;
        }
    };
    QuestionsAnswersComponent.prototype.calculateScore = function () {
        this.quizScore = (this.quizScore / this._quiz.length) * 100;
        this._quizService.quizDone(true);
        this._quizService.quizScore(this.quizScore);
    };
    QuestionsAnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get quiz data
        this._quizService.getQuizData().subscribe(function (quiz) {
            _this._quiz = quiz.questions;
        }, 
        // error
        function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionsAnswersComponent.prototype.ngDoCheck = function () {
        // get timer value
        this.secLeft = this._quizService.time;
        if (this.secLeft === 0) {
            this._quizService.quizScore(this.quizScore * 10);
        }
    };
    return QuestionsAnswersComponent;
}());
QuestionsAnswersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-questions-answers',
        template: __webpack_require__("./src/app/components/quiz/questions-answers/questions-answers.component.html"),
        styles: [__webpack_require__("./src/app/components/quiz/questions-answers/questions-answers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], QuestionsAnswersComponent);

var _a;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/questions-answers.component.js.map

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/***/ (function(module, exports) {

module.exports = ".timer {\n    background: #2b6db3;\n    color:#fff;\n    padding: 0.25rem 0;\n}\n.qa, .results {\n    padding: 2rem;\n}"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\n    <div *ngIf=\"isQuizDone === false\">\n        <div class=\"timer\">\n            <app-timer></app-timer>\n        </div>\n        <div class=\"qa\">\n            <app-questions-answers></app-questions-answers>\n        </div>\n    </div>\n    <div class=\"results text-center\" *ngIf=\"isQuizDone === true\">\n        <app-results (sendScore)=\"handleScore($event)\"></app-results>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var QuizComponent = (function () {
    function QuizComponent(_quizService) {
        this._quizService = _quizService;
        this.score = null;
        this.isQuizDone = false;
    }
    // handleScore() triggered by sendScore Event, sent from Results Component
    QuizComponent.prototype.handleScore = function (data) {
        this.score = data;
    };
    // Checks if Quiz is Finished
    QuizComponent.prototype.ngDoCheck = function () {
        if (this._quizService.isQuizDone === true) {
            this.score = this._quizService.score;
            this.isQuizDone = this._quizService.isQuizDone;
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quiz',
        template: __webpack_require__("./src/app/components/quiz/quiz.component.html"),
        styles: [__webpack_require__("./src/app/components/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], QuizComponent);

var _a;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/quiz.component.js.map

/***/ }),

/***/ "./src/app/components/quiz/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
        this.isQuizDone = false;
        this.score = null;
    }
    // Get Quiz Questons and Answers
    QuizService.prototype.getQuizData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://148.100.87.98:5000/api/quiz', { headers: headers }) // update url on deployment
            .map(function (res) { return res.json(); });
    };
    // Validate Name
    QuizService.prototype.validateName = function (result) {
        if (result.name === undefined || result.name === "") {
            return false;
        }
        else {
            return true;
        }
    };
    // Save Quiz Results
    QuizService.prototype.registerResult = function (result) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://148.100.87.98:5000/api/scores/save', result, { headers: headers }) // update url on deployment
            .map(function (res) { return res.json(); });
    };
    // Get High Scores
    QuizService.prototype.getHighScores = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://148.100.87.98:5000/api/scores/high-scores', { headers: headers }) // update url on deployment
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.quizDone = function (data) {
        this.isQuizDone = data;
    };
    QuizService.prototype.quizScore = function (data) {
        this.score = data;
    };
    QuizService.prototype.timeLeft = function (data) {
        this.time = data;
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuizService);

var _a;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/quiz.service.js.map

/***/ }),

/***/ "./src/app/components/quiz/results/results.component.css":
/***/ (function(module, exports) {

module.exports = ".score {\n    font-size: 2rem;\n    margin-bottom: 2rem\n}\n.score > div {\n    font-size: 4rem;\n    font-weight: bold;\n}\n.register-score {\n    font-size: 1.2rem;\n    margin-bottom: 2rem;\n}\n.btn-home,\n.btn-scores {\n    max-width: 80%;\n}\n"

/***/ }),

/***/ "./src/app/components/quiz/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"score\">Your result is:\n  <div>{{ quizScore }}%</div>\n</div>\n<div class=\"register-score\">\n  <form (submit)=\"registerScore()\">\n    <p>Enter your name to register score:</p>\n    <label for=\"name\" class=\"hidden\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" class=\"name\" name=\"name\" placeholder=\"Enter Your Name\">\n    <button class=\"btn-register\">Register Score</button>\n  </form>\n</div>\n<div>\n  <button class=\"btn-home btn-primary\" routerLink=\"/\">BACK TO HOME</button>\n  <button class=\"btn-scores btn-primary\" routerLink=\"/high-scores\">HIGH SCORES</button>\n</div>"

/***/ }),

/***/ "./src/app/components/quiz/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Service

var ResultsComponent = (function () {
    function ResultsComponent(_quizService, router) {
        this._quizService = _quizService;
        this.router = router;
        this.quizScore = null;
        this.scoreSend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ResultsComponent.prototype.ngOnInit = function () {
        // Get Current Score
        this.quizScore = this._quizService.score;
    };
    ResultsComponent.prototype.registerScore = function () {
        var _this = this;
        // result object
        var result = {
            name: this.name,
            score: this.quizScore,
            date: new Date()
        };
        // Name is required!
        if (!this._quizService.validateName(result)) {
            console.log('Please enter your name!');
            return false;
        }
        // result object registration 
        this._quizService.registerResult(result).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/high-scores']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Send Score to Quiz Component (parent)
    ResultsComponent.prototype.sendScore = function () {
        console.log("sendScore()");
        this.scoreSend.emit(this.quizScore);
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        console.log('RESULTS ARE DESTROYED.');
        this._quizService.quizScore(null);
        this._quizService.quizDone(false);
    };
    return ResultsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ResultsComponent.prototype, "scoreSend", void 0);
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("./src/app/components/quiz/results/results.component.html"),
        styles: [__webpack_require__("./src/app/components/quiz/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/results.component.js.map

/***/ }),

/***/ "./src/app/components/quiz/timer/timer.component.css":
/***/ (function(module, exports) {

module.exports = "#timer {\n    font-size: 1.5em;\n    text-align: center;\n    letter-spacing: 5px;\n}"

/***/ }),

/***/ "./src/app/components/quiz/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timer\"></div>"

/***/ }),

/***/ "./src/app/components/quiz/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__("./src/app/components/quiz/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var TimerComponent = (function () {
    function TimerComponent(_quizService) {
        this._quizService = _quizService;
    }
    TimerComponent.prototype.ngOnInit = function () {
        var self = this;
        function countdown(elem, min, sec) {
            var element, endTime, hours, mins, msLeft, time;
            function twoDigits(n) {
                return (n <= 9 ? "0" + n : n);
            }
            function updateTimer() {
                msLeft = endTime - (+new Date);
                var secondsLeft = Math.round(msLeft / 1000);
                self.secLeft = secondsLeft;
                if (msLeft < 1000) {
                    element.innerHTML = "Time is up!";
                }
                else {
                    time = new Date(msLeft);
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                    setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
                }
                return secondsLeft;
            }
            element = document.getElementById(elem);
            endTime = (+new Date) + 1000 * (60 * min + sec) + 500;
            updateTimer();
        }
        countdown("timer", 1, 0);
    };
    TimerComponent.prototype.ngDoCheck = function () {
        this._quizService.timeLeft(this.secLeft);
        if (this.secLeft === 0) {
            this._quizService.quizDone(true);
        }
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("./src/app/components/quiz/timer/timer.component.html"),
        styles: [__webpack_require__("./src/app/components/quiz/timer/timer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], TimerComponent);

var _a;
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/timer.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/ubuntu/QuizApp/ng-src/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map