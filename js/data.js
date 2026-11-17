// =========================================================================
// FILE DỮ LIỆU CHUNG CHO CẢ 3 TRANG (index.html, du-an.html, tong-ket.html)
// Bạn chỉ cần sửa thông tin cá nhân, mục tiêu, 6 bài tập & tổng kết ở đây!
// =========================================================================
const SITE_DATA = {
  // -------------------------------------------------------------------------
  // CÂU 1. TRANG GIỚI THIỆU – ABOUT ME (index.html)
  // Đáp ứng đủ 3 ý yêu cầu:
  // (1) Thông tin cá nhân ngắn gọn: họ tên, ngành học, sở thích, ảnh đại diện
  // (2) Mục tiêu học tập và định hướng phát triển cá nhân
  // (3) Mục tiêu của Portfolio
  // -------------------------------------------------------------------------
  profile: {
    greeting: "♪ xin chào, mình là",
    fullName: "Lê Đức Huy",
    studentId: "[Mã sinh viên của bạn]",
    year: "Năm 2",
    major: "Sư phạm Âm nhạc",
    school: "Trường Đại Học Sư Phạm Nghệ Thuật Trung Ương",
    className: "[Lớp / Khóa]",
    email: "[emailcuaban@gmail.com]",
    // Đặt ảnh vào thư mục images/ và điền tên file (ví dụ: "images/photo1.jpg")
    avatarUrl: "",
    secondPhotoUrl: "",
    quote: "“Âm nhạc chạm đến cảm xúc, còn công nghệ số giúp bài giảng lan tỏa gần gũi hơn.”",
    hobbies: ["🎧 Nghe nhạc Indie"],
    courseName: "Nhập môn Công nghệ số và AI"
  },

  // Ý 2 của Câu 1: Mục tiêu học tập và định hướng phát triển cá nhân
  learningGoal: {
    title: "Mục tiêu học tập & Định hướng phát triển cá nhân",
    summary:
      "Hoàn thành tốt môn Nhập môn Công nghệ số và AI, làm chủ các kỹ năng số nền tảng và định hướng trở thành giáo viên Sư phạm Âm nhạc ứng dụng công nghệ hiện đại vào giảng dạy.",
    points: [
      "Nắm vững kỹ năng quản lý dữ liệu số, tìm kiếm thông tin học thuật và sử dụng AI có chọn lọc, có trách nhiệm.",
      "Ứng dụng công nghệ và AI để thiết kế bài giảng, học liệu âm nhạc trực quan, sinh động và gần gũi với học sinh.",
      "Không ngừng rèn luyện chuyên môn âm nhạc song song với năng lực số để thích ứng với giáo dục hiện đại."
    ]
  },

  // Ý 3 của Câu 1: Mục tiêu của Portfolio
  portfolioGoal: {
    title: "Mục tiêu của Portfolio",
    summary:
      "Xây dựng không gian lưu trữ số khoa học cho toàn bộ quá trình học tập học phần Nhập môn Công nghệ số và AI.",
    points: [
      "Thể hiện các kỹ năng số và tư duy ứng dụng AI đã học qua từng bài tập thực hành.",
      "Lưu trữ có hệ thống mục tiêu, quy trình thực hiện và sản phẩm cá nhân để thuận tiện truy cập, đối chiếu và chia sẻ.",
      "Ghi nhận quá trình tự học, rút kinh nghiệm từ những khó khăn để hoàn thiện bản thân."
    ]
  },

  // -------------------------------------------------------------------------
  // CÂU 2. TRANG DỰ ÁN – 6 BÀI TẬP THỰC HÀNH (du-an.html)
  // -------------------------------------------------------------------------
  assignments: [
   {
      code: "Bài 01",
      status: "Đã hoàn thành",
      title: "Thao tác cơ bản với tệp tin và thư mục",
      shortDesc: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin/thư mục trên Windows.",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa (tạm thời và vĩnh viễn) cũng như khôi phục tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.",
      process:
        "1. Mở File Explorer (Windows + E) và truy cập ổ đĩa dữ liệu (D: / Documents).\n" +
        "2. Tạo thư mục chính đặt tên theo cú pháp ThucHanh_HoTenSinhVien và thư mục con TaiLieu bên trong.\n" +
        "3. Tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt rồi sao chép (Ctrl + C / Ctrl + V) sang thư mục TaiLieu.\n" +
        "4. Tạo tệp DiChuyen.txt và thực hiện thao tác di chuyển (Ctrl + X / Ctrl + V) vào thư mục TaiLieu.\n" +
        "5. Thực hành xóa tạm thời tệp GhiChuQuanTrong.txt vào Recycle Bin, xóa vĩnh viễn tệp DiChuyen.txt (Shift + Delete) và khôi phục (Restore) tệp từ Thùng rác.\n" +
        "6. Chụp ảnh màn hình minh họa chi tiết từng bước thực hiện và tổng hợp vào tệp văn bản báo cáo.",
      errorsAndFix:
        "• Nhầm lẫn giữa thao tác Sao chép (Copy) và Di chuyển (Cut) khiến tệp gốc không còn ở thư mục cũ; đã kiểm tra lại cây thư mục và thực hiện đúng quy trình.\n" +
        "• Khi dùng tổ hợp Shift + Delete dễ thao tác nhầm do tệp bị xóa vĩnh viễn không qua Thùng rác; đã rà soát kỹ tên tệp trước khi xác nhận hộp thoại cảnh báo.",
      result:
        "Hoàn thành đầy đủ 12 bước thao tác quản lý tệp tin và thư mục theo yêu cầu; xuất tệp văn bản báo cáo kèm ảnh chụp màn hình minh họa rõ nét cho từng bước thực hiện.",
      productLink: "files/bai1.pdf" 
    },
    {
      code: "Bài 02",
      status: "Hoàn thành",
      title: "Tìm kiếm & Đánh giá thông tin học thuật",
      shortDesc: "Khai thác từ khóa nâng cao, tìm tài liệu thanh nhạc giọng Soprano và kiểm chứng độ tin cậy khoa học.",
      goal: "Thu thập, phân tích và thẩm định độ tin cậy của các nguồn học liệu khoa học trong và ngoài nước liên quan đến kỹ thuật thanh nhạc và đặc điểm giọng Soprano, làm cơ sở xây dựng biện pháp rèn luyện cho học viên tại Trung tâm Nghệ thuật Sol Art, Hà Nội.",
      process: "1. Xác định chủ đề, phạm vi và xây dựng bộ từ khóa song ngữ chuyên ngành (VD: soprano voice training, vocal pedagogy, soprano passaggio, chuyển đổi âm khu giọng nữ cao...).\n2. Tra cứu trên 4 nhóm nguồn chính (Google Scholar, PubMed, tạp chí Journal of Voice, PLOS ONE, giáo trình trong nước và quốc tế) và phân loại thành 3 nhóm tài liệu: lý luận, chuyên sâu giọng Soprano, nghiên cứu thực nghiệm.\n3. Chấm điểm thẩm định 10 tài liệu tiêu biểu theo thang điểm 4 dựa trên 4 tiêu chí (Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn & tính cập nhật) và lập danh mục tài liệu tham khảo.",
      errorsAndFix: "Một số nghiên cứu thực nghiệm được khảo sát trên đối tượng nam ca sĩ hoặc ca sĩ chuyên nghiệp nên không thể áp dụng máy móc cho học viên đang đào tạo; đồng thời một vài bài báo quốc tế còn thiếu thông tin thư mục đầy đủ. Đã xử lý bằng cách đối chiếu chéo với giáo trình sư phạm nền tảng trong nước, ghi chú rõ giới hạn đối tượng áp dụng và đánh dấu các nguồn cần bổ sung thông tin xuất bản.",
      result: "Hoàn thiện báo cáo tổng hợp quy trình tìm kiếm học liệu chuyên ngành thanh nhạc, bảng xếp hạng độ tin cậy thang điểm 4 cho 10 công trình tiêu biểu (đa số đạt mức 3,5–4,0 điểm) cùng danh mục tài liệu tham khảo chuẩn học thuật.",
      productLink: "files/bai2.pdf"
    },
    {
      code: "Bài 03",
      status: "Đang cập nhật",
      title: "Viết Prompt hiệu quả cho các tác vụ học tập",
      shortDesc: "Xây dựng cấu trúc Prompt hiệu quả hỗ trợ phân tích tác phẩm và soạn ý tưởng.",
      goal: "[Điền mục tiêu Bài 03 của bạn tại đây...]",
      process: "[Điền các bước bạn đã thực hiện cho Bài 03...]",
      errorsAndFix: "[Ghi lại lỗi hoặc khó khăn gặp phải và cách bạn xử lý...]",
      result: "[Mô tả sản phẩm đạt được của Bài 03...]",
      productLink: ""
    },
    {
      code: "Bài 04",
      status: "Đang cập nhật",
      title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      shortDesc: "Nhận diện giới hạn của AI, kiểm chứng thông tin và trích dẫn nguồn đúng chuẩn.",
      goal: "[Điền mục tiêu Bài 04 của bạn tại đây...]",
      process: "[Điền các bước bạn đã thực hiện cho Bài 04...]",
      errorsAndFix: "[Ghi lại lỗi hoặc khó khăn gặp phải và cách bạn xử lý...]",
      result: "[Mô tả sản phẩm đạt được của Bài 04...]",
      productLink: ""
    },
    {
      code: "Bài 05",
      status: "Hoàn thành",
      title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      shortDesc: "Ứng dụng công cụ AI tạo sinh thiết kế kịch bản, thuyết trình và sản xuất video phục dựng kiến trúc lịch sử.",
      goal: "Tìm hiểu chuyên sâu các công cụ AI tạo sinh, rèn luyện kỹ năng viết câu lệnh (prompt) chuẩn xác để xây dựng nội dung thuyết trình và tạo video minh họa trực quan phục dựng kiến trúc lịch sử Việt Nam.",
      process: "1. Nghiên cứu công cụ AI và quay video màn hình ghi lại toàn bộ quá trình thao tác thực tế từ bước khởi đầu.\n2. Lên kịch bản khung 04 giai đoạn (Tình huống thực tế -> Đặt vấn đề & dẫn chứng khoa học -> Giải pháp công nghệ & trực quan hóa -> Tổng kết) và biên tập lời thoại súc tích.\n3. Viết prompt giàu hình ảnh mô tả không gian Hoàng thành Thăng Long thời Lý / Kinh thành Huế trong sương sớm, sau đó dùng Google Veo 3 hoặc Luma Dream Machine để tạo thước phim chuyển động mượt mà.",
      errorsAndFix: "Khó khăn ban đầu trong việc kiểm soát chuyển động góc máy và giữ nét kiến trúc cổ đặc trưng (mái ngói âm dương, hành lang sâu) khi tạo video bằng AI. Nhóm đã khắc phục bằng cách tinh chỉnh prompt chi tiết hơn về bối cảnh, ánh sáng, chuyển động camera, đồng thời tổ chức họp góp ý chéo để tối ưu hóa sản phẩm chung.",
      result: "Hoàn thiện bộ sản phẩm báo cáo nhóm 4 gồm: Kịch bản thuyết trình mạch lạc theo 4 giai đoạn, video ghi hình thao tác sử dụng công cụ AI thực tế và thước phim điện ảnh minh họa phục dựng kiến trúc lịch sử chất lượng cao.",
      productLink: "files/bai5.pdf",
      videoLink: "https://www.youtube.com/watch?v=DzyYBuSJ55o"
    },
    {
      code: "Bài 06",
      status: "Đang cập nhập",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      shortDesc: "Hệ thống hóa toàn bộ quá trình học tập lên trang web cá nhân hoàn chỉnh.",
      goal: "[Điền mục tiêu Bài 06 của bạn tại đây...]",
      process: "[Điền các bước bạn đã thực hiện cho Bài 06...]",
      errorsAndFix: "[Ghi lại lỗi hoặc khó khăn gặp phải và cách bạn xử lý...]",
      result: "[Mô tả sản phẩm đạt được của Bài 06...]",
      productLink: ""
    }
  ],

  // -------------------------------------------------------------------------
  // CÂU 3. TRANG TỔNG KẾT – CONCLUSION (tong-ket.html)
  // Đáp ứng đủ 4 gạch đầu dòng yêu cầu:
  // (1) Trải nghiệm và cảm nhận cá nhân về quá trình thực hiện Portfolio
  // (2) Những kiến thức và kỹ năng quan trọng nhất đã tiếp thu được
  // (3) Điểm tâm đắc nhất và những thách thức đã gặp phải khi xây dựng Portfolio
  // (4) Đường liên kết dẫn đến các trang bài tập đã hoàn thành (tự động render từ `assignments` bên trên)
  // -------------------------------------------------------------------------
  conclusion: {
    experienceAndFeelings:
      "Quá trình học môn Nhập môn Công nghệ số và AI cùng việc tự tay hoàn thiện trang Portfolio này là một trải nghiệm rất mới mẻ đối với một sinh viên Sư phạm Âm nhạc như mình. Ban đầu mình khá bỡ ngỡ vì trước giờ chủ yếu quen với việc tập đàn, xướng âm và soạn bài trên giấy. Tuy nhiên, khi từng bước làm quen với cách quản lý dữ liệu, khai thác công cụ số và tự tổ chức các sản phẩm học tập lên một trang web cá nhân hoàn chỉnh, mình cảm thấy việc học trở nên chủ động, hệ thống và thú vị hơn rất nhiều.",

    keyKnowledgeAndSkills:
      "Qua học phần này, mình đã nắm vững cách tổ chức và lưu trữ tệp tin khoa học trên đám mây, kỹ năng tìm kiếm và đánh giá độ tin cậy của tài liệu âm nhạc học thuật. Quan trọng hơn cả là tư duy đặt câu lệnh (Prompt) hiệu quả và sử dụng AI có trách nhiệm — biết kiểm chứng thông tin, giữ liêm chính học thuật và tận dụng công cụ số để thiết kế slide bài giảng, phiếu học tập âm nhạc trực quan hơn.",

    highlightAndChallenges:
      "Điểm mình tâm đắc nhất ở Portfolio này là giao diện trẻ trung, mang đậm màu sắc âm nhạc (tích hợp cả phím đàn Kalimba tương tác) và lưu trữ gọn gàng toàn bộ 6 bài thực hành để sau này có thể mở lại làm tư liệu giảng dạy. Thách thức lớn nhất mình gặp phải là việc cấu trúc lại bố cục code HTML/CSS và xử lý lỗi hiển thị sao cho trang web chạy mượt mà trên cả điện thoại lẫn máy tính; nhờ kiên nhẫn rà soát từng phần và thử nghiệm nhiều lần, mình đã hoàn thiện được sản phẩm đúng như mong muốn."
  }
};
