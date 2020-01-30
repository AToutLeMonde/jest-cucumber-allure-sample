import { defineFeature, loadFeature } from "jest-cucumber";
import reportParams from "../support/utils/reportParams";
import reportStep from "../support/utils/reportStep";


const feature = loadFeature("./../features/validatorFeature.feature", {
  loadRelativePath: true
});

const validate = require("../../utils/validate");

let scenarioIndex = -1;
let currentStep;
let currentScenario;
defineFeature(feature, test => {
  
  test("Тест на валидатор: <значение>", ({ defineStep }) => {
    beforeEach(() => {      
      currentStep = -1;      
      reporter.feature(feature.title);
    reporter.addEnvironment('platform', require('os').platform());
    reporter.addEnvironment('release', require('os').release())
    });

    afterEach(() => {
      
    });

    

    scenarioIndex++;
    currentScenario = feature.scenarioOutlines[scenarioIndex];

    

    let env = {};

    defineStep(
      /^подготовлено значение (\S.*) для вызова валидатора$/,
      value => {
        currentStep = reportStep(reporter, currentScenario, currentStep, [
          value
        ]);
        reportParams(reporter, { value: value });

        env.inputValue = value.substring(1, value.length - 1);
        reporter.endStep();

      }
    );

    defineStep(
      /^вызван валидатор с проверкой (на обязательность|на регулярное выражение|на максимальную длину)?$/,
      (type) => {
        currentStep = reportStep(reporter, currentScenario, currentStep, [
          type
        ]);

        if (type === "на обязательность") {
          env.validationOptions = { checkRequired: true };
        } else if (type === "на регулярное выражение") {
          env.validationOptions = { checkRegExp: true };
        } else if (type === "на максимальную длину") {
          env.validationOptions = { checkMaxLength: true};
        }
        reportParams(reporter, { validationOptions: env.validationOptions });
        env.validationResult = validate(env.inputValue, env.validationOptions);
        reporter.endStep();
      }
    );

    defineStep(
      /^значение (валидное|не валидное)$/,
      expectedResult => {
        currentStep = reportStep(reporter, currentScenario, currentStep, [
          expectedResult
        ]);
        reportParams(reporter, { validationResult: env.validationResult });

        if (expectedResult === "валидное") {
          expect(env.validationResult).toHaveProperty("isOk", true);
        } else {
          expect(env.validationResult).toHaveProperty("isOk", false);
        }
        reporter.endStep();
      }
    );
  });
});
