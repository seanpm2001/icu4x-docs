initSidebarItems({"enum":[["DateTimeError","A list of error outcomes for various operations in the `icu_datetime` crate."],["DateTimeFormatterOptions","A bag of options which, together with `Locale`, defines how dates will be formatted with a `TypedDateTimeFormatter` instance."],["Error","A list of error outcomes for various operations in the `icu_datetime` crate."]],"mod":[["fields","Enums representing the fields in a date pattern, including the field’s type, length and symbol."],["input","A collection of utilities for representing and working with dates as an input to formatting operations."],["options","[`DateTimeFormatterOptions`] is a bag of options which, together with `Locale`, defines how dates will be formatted with a `TypedDateTimeFormatter` instance."],["provider","Data provider structs for this ICU4X component."],["time_zone","A formatter specifically for the time zone."]],"struct":[["DateFormatter","[`DateFormatter`] is a formatter capable of formatting dates from any calendar, selected at runtime. For the difference between this and `TypedDateFormatter`, please read the [crate root docs][crate]."],["DateTimeFormatter","[`DateTimeFormatter`] is a formatter capable of formatting date/times from any calendar, selected at runtime. For the difference between this and `TypedDateTimeFormatter`, please read the [crate root docs][crate]."],["FormattedDateTime","[`FormattedDateTime`] is a intermediate structure which can be retrieved as an output from `TypedDateTimeFormatter`."],["FormattedTimeZone","[`FormattedTimeZone`] is a intermediate structure which can be retrieved as an output from [`TimeZoneFormatter`]."],["FormattedZonedDateTime","[`FormattedTimeZone`] is a intermediate structure which can be retrieved as an output from [`ZonedDateTimeFormatter`]."],["TimeFormatter","[`TimeFormatter`] is a structure of the `icu_datetime` component that provides time formatting only. When constructed, it uses data from the data provider, selected locale and provided preferences to collect all data necessary to format any time into that locale."],["TypedDateFormatter","[`TypedDateFormatter`] is a formatter capable of formatting dates from a calendar selected at compile time. For the difference between this and `DateFormatter`, please read the [crate root docs][crate]."],["TypedDateTimeFormatter","`TypedDateTimeFormatter` is a formatter capable of formatting date/times from a calendar selected at compile time. For the difference between this and `DateTimeFormatter`, please read the [crate root docs][crate]."],["TypedZonedDateTimeFormatter","The composition of `TypedDateTimeFormatter` and `TimeZoneFormatter`."],["ZonedDateTimeFormatter","[`ZonedDateTimeFormatter`] is a formatter capable of formatting date/times with time zones from any calendar, selected at runtime. For the difference between this and `TypedZonedDateTimeFormatter`, please read the [crate root docs][crate]."]],"trait":[["CldrCalendar","A calendar that can be found in CLDR"]]});