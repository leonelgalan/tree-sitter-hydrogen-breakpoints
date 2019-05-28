module.exports = grammar({
  name: 'hydrogen_breakpoints',

  rules: {
    breakpoint: $ => repeat(
      $.directive
    ),

    directive: $ => seq(
      '%%',
      $._name
    ),

    _name: $ => /[^$]*/,
  }
});
