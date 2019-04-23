import { themeGet } from 'styled-system';

export const ChartTheme = {
  legend: {
    height: '12',
    width: '12'
  },
  tooltip: {
    iconHeight: '8'
  },
  grid: {
    left: '40',
    right: '30',
    top: '30',
    bottom: '30'
  },
  dataZoomHeight: '24',
  dataZoomTopPadding: '12',
  loader: {
    backGroundColor: 'rgba(255, 255, 255, .7)'
  }
};

export default function getSynapticTheme(theme) {
  // wrapper over themeGet
  function getFromTheme(value) {
    return themeGet(value)({ theme });
  }

  const defaultBorderColor = getFromTheme('colors.border.default');
  // fallback colors if not specified in code
  // tries to map ['#0288f6', '#f6a623', '#2f006c', '#d94185', '#00b5b5', '#5dca74', '#fb7d4b', '#cf3a5c', '#723147', '#bd8d46']
  // which in taken from somewhere in echarts themes folder.
  const themeColors = getFromTheme('colors');
  const primaryColors = [
    themeColors.blue[6],
    themeColors.yellow[6],
    themeColors.purple[6],
    themeColors.pink[6],
    themeColors.cyan[6],
    themeColors.green[6],
    themeColors.saffron[6],
    themeColors.red[6],
    themeColors.brown[6],
    themeColors.olive[6]
  ];

  const axisLineStyle = {
    lineStyle: {
      color: defaultBorderColor
    }
  };

  const nameTextStyle = {
    fontSize: getFromTheme('fontSizes.1'),
    color: getFromTheme('colors.text.light'),
    rich: {
      uppercase: {
        textTransform: 'uppercase'
      }
    }
  };

  const axisLabelTextStyle = {
    fontSize: getFromTheme('fontSizes.0'),
    color: getFromTheme('colors.text.light'),
    fontWeight: getFromTheme('fontWeight.semibold')
  };

  const legendTextStyle = {
    fontSize: getFromTheme('fontSizes.0'),
    fontWeight: getFromTheme('fontWeight.semibold'),
    color: getFromTheme('colors.text.light')
  };

  return {
    color: primaryColors,
    grid: {
      show: true,
      backgroundColor: getFromTheme('colors.grey.0'),
      borderColor: getFromTheme('colors.border.transparent'),
      right: ChartTheme.grid.right,
      left: ChartTheme.grid.left,
      top: ChartTheme.grid.top,
      bottom: ChartTheme.grid.bottom
    },
    textStyle: {
      // Can it be system font??
      fontFamily: getFromTheme('fonts.0'),
      fontSize: getFromTheme('fontSizes.1')
    },
    legend: {
      textStyle: legendTextStyle
    },
    tooltip: {
      backgroundColor: getFromTheme('colors.white'),
      textStyle: {
        fontSize: getFromTheme('fontSizes.1'),
        color: getFromTheme('colors.text.medium')
      },
      padding: getFromTheme('space.2'),
      borderWidth: 0,
      extraCssText: `box-shadow: ${getFromTheme('shadows.3')}`,
      axisPointer : {
        lineStyle : {
          color: getFromTheme('colors.grey.8'),
          type: 'solid'
        },
        crossStyle: {
          color: getFromTheme('colors.grey.8'),
          type: 'solid'
        }
      }
    },
    // http://echarts.baidu.com/echarts2/doc/doc-en.html#CategoryAxis current doc doesn't define these axes, doc reference taken from earlier version.
    timeAxis: {
      nameTextStyle,
      axisLine: axisLineStyle,
      axisTick: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      axisLabel: {
        textStyle: axisLabelTextStyle
      },
      splitLine: {
        show: false
      },
      nameLocation: 'end'
    },
    valueAxis: {
      nameTextStyle,
      axisLine: axisLineStyle,
      axisTick: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      axisLabel: {
        textStyle: axisLabelTextStyle
      },
      splitLine: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      splitNumber: 4,
      nameLocation: 'end'
    },
    categoryAxis: {
      nameTextStyle,
      axisLine: axisLineStyle,
      axisTick: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      axisLabel: {
        textStyle: axisLabelTextStyle
      },
      splitLine: {
        show: false
      },
      nameLocation: 'end'
    },
    logAxis: {
      nameTextStyle,
      axisLine: axisLineStyle,
      axisTick: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      axisLabel: {
        textStyle: axisLabelTextStyle
      },
      splitLine: {
        lineStyle: {
          color: defaultBorderColor
        }
      },
      nameLocation: 'end'
    },
    dataZoom: {
      backgroundColor: getFromTheme('colors.white'),
      fillerColor: getFromTheme('colors.blue.1'),
      borderColor: defaultBorderColor,
      height: getFromTheme('ChartTheme.dataZoomHeight'),
      textStyle: axisLabelTextStyle,
      handleStyle: {
        color: getFromTheme('colors.blue.4')
      }
    }
  };
}
